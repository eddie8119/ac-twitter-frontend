<template>
  <div>
    <div
      v-for="following in followings"
      id="user-follower-list-container"
      :key="following.id"
    >
      <button
        class="user-follow-btn empty-btn-style"
        type="submit"
      >
        跟隨
      </button>
      <img
        class="user-headshot"
        :src="following.avatar | emptyImage"
        alt="個人頭像"
      >
      <div class="ml-2">
        <div class="">
          <router-link
            :to="{
              name: 'user-id-tweets',
              params: { userId: following.followingId }
            }"
            class="user-name"
          >
            {{ following.name }}
          </router-link>
          <div class="user-acount">
            <span>@</span>
            {{ following.account }}
          </div>
        </div>
        <p class="tweet-content mt-4">
          {{ following.introduction }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import { mapState } from "vuex"

export default {
  name: "UserFollowingList",
  mixins: [emptyImageFilter],
  props: {
    initialFollowings: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      followings: this.initialFollowings
    }
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    initialFollowings (newValue) {
      this.followings = {
        ...this.followings,
        ...newValue
      }
    }
  }
}
</script>
