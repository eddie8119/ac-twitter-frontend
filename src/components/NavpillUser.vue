<template>
  <div
    id="navpillUser-container"
    class="d-flex"
  >
    <div :class="['navpill-title-container', { active: $router.name === 'user-tweets' }]">
      <router-link
        :to="{
          name: 'user-id-tweets',
          params: { userId: user.id }
        }"
        class="navpill-title"        
      >
        推文
      </router-link>
    </div>
    <div
      :class="['navpill-title-container', { active: $router.name === 'user-replied-tweets' }]"      
    >
      <router-link
        :to="{
          name: 'user-id-replied_tweets',
          params: { userId: user.id }
        }"
        class="navpill-title"                
      >
        回覆
      </router-link>
    </div>
    <div :class="['navpill-title-container', { active: $router.name === 'user-likes' }]">
      <router-link
        :to="{
          name: 'user-id-likes',
          params: { userId: user.id }
        }"
        class="navpill-title"        
      >
        喜歡的內容
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavpillUser",
  props: {
    initialUser: {
      type: Object,
      default: () => {
        return {
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
        }
      }
    }
  },
  data () {
    return {
      user: {
        ...this.initialUser
      },
      isLoading: true
    }
  },
  watch: {
    initialUser (newValue) {
      this.user = {
        ...this.user,
        ...newValue
      }
    }
  }
}
</script>