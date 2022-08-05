<template>
  <div
    id="navpillUser-container"
    class="d-flex"
  >
    <div class="navpill-title-container">
      <router-link
        v-if="currentUser.id === user.id"
        :to="{
          name: 'user-followerlist',
          params: { userId: user.id }
        }"
        class="navpill-title"
      >
        追隨者
      </router-link>
      <router-link
        v-else
        :to="{
          name: 'user-id-followerlist',
          params: { userId: user.id }
        }"
        class="navpill-title"
      >
        追隨者
      </router-link>
    </div>

    <div class="navpill-title-container">
      <router-link
        v-if="currentUser.id === user.id"
        :to="{
          name: 'user-followinglist',
          params: { userId: user.id }
        }"
        class="navpill-title"
      >
        正在追隨
      </router-link>
      <router-link
        v-else
        :to="{
          name: 'user-id-followinglist',
          params: { userId: user.id }
        }"
        class="navpill-title"
      >
        正在追隨
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "NavpillUserFollow",
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
  computed: {
    ...mapState(["currentUser"]),
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