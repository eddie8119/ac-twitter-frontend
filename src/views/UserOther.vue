<template>
  <div class="d-flex justify-content-center">
    <NavBar />
    <div class="main-wrapper">
      <NavpillHeader />
      <UserProfileOther
        :initial-user="user"
      />

      <!-- 包含 推文、回覆、喜歡的內容 三個分頁 -->
      <NavpillUser
        :initial-user="user"
      />
      <div class="y-scroll">
        <router-view
          :initial-tweets="tweets"
          :initial-replies="replies"
          :initial-likes="likes"
        />
      </div>
    </div>

    <div id="recommendColumn-container">
      <div class="recommendHeader mt-4">
        <h1>推薦跟隨</h1>
      </div>
      <RecommendColumn />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import RecommendColumn from "../components/RecommendColumn.vue"
import NavpillHeader from "../components/NavpillHeader.vue"
import UserProfileOther from "../components/UserProfileOther.vue"
import NavpillUser from "../components/NavpillUser.vue"
import { Toast } from './../utils/helpers'
import usersAPI from "./../apis/users"

export default {
  name: "UserOther",
  components: {
    NavBar,
    RecommendColumn,
    NavpillHeader,
    UserProfileOther,
    NavpillUser,
  },
  beforeRouteUpdate (to, from, next) {
    const { userId } = to.params
    this.fetchUser(userId)
    next()
  },
  data () {
    return {
      user: {
        id: -1,
        account: '',
        email: '',
        name: '',
        avatar: '',
        cover: '',
        introduction: '',
        role: 'user',
        followingCount: -1,
        followerCount: -1
      },
      tweets: [],
      replies: [],
      likes: [],
      isProcessing: false
    }
  },
  watch: {
    user: "fetchUserTweetsRepliesLikes"
  },
  created () {
    const { userId } = this.$route.params
    this.fetchUser(userId)
  },
  methods: {
    async fetchUser (userId) {
      try {
        const followingsData = await usersAPI.getUserFollowings({ userId })
        const followings = followingsData.data

        const followersData = await usersAPI.getUserFollowers({ userId })
        const followers = followersData.data

        // console.log('followings=', followings)
        // console.log('followers=', followers)

        const { data } = await usersAPI.getUser({ userId })

        const {
          id,
          account,
          email,
          name,
          avatar,
          cover,
          introduction,
          role
        } = data

        this.user = {
          ...this.user,
          id,
          account,
          email,
          name,
          avatar,
          cover,
          introduction,
          role,
          followingCount: followings.length,
          followerCount: followers.length
        }

      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得 User 資料，請稍後再試'
        })
      }
    },
    async fetchUserTweetsRepliesLikes() {
      try {
        console.log('this.user.id=', this.user.id)
        const tweets = await usersAPI.getUserTweets({ userId: this.user.id })
        this.tweets = tweets.data
        // console.log('tweets=', this.tweets)

        const replies = await usersAPI.getUserReplies({ userId: this.user.id })
        this.replies = replies.data
        // console.log('replies=', this.replies)

        const likes = await usersAPI.getUserLikes({ userId: this.user.id })
        this.likes = likes.data
        // console.log('likes=', this.likes)

      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得 Tweets 資料",
        });
      }
    }
  }
};
</script>
