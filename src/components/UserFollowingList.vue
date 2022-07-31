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
        <div class="d-flex align-items-center">
          <a
            href="#"
            class="user-name"
          >
            {{ following.name }}
          </a>
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
