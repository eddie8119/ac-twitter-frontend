<template>
  <div>
    <div id="admin-tweet-element-container">
      <img
        class="user-headshot"
        :src="tweet.User.avatar | emptyImage"
        alt="個人頭像"
      >
      <div class="ml-2">
        <div class="d-flex">
          <p            
            class="user-name"
          >
            {{ adminTweet.User.name }}
          </p>
          <p class="user-acount-for-post ml-2">
            <span>@</span>{{ adminTweet.User.acount }}<span> • </span>
          </p>
          <p class="post-time">
            {{ adminTweet.createdAt | fromNow }}
          </p>
        </div>
        <p class="tweet-content mt-2">
          {{ adminTweet.description }}
        </p>        
      </div>
      <button @click.stop.prevent="removeTweet(adminTweet.id)">
        <img
          src="../assets/delete_list.png"
          class="delete-icon-size"
          alt="刪除按鈕"
        >
      </button>        
    </div>
  </div>
</template>

<script>
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'
import { fromNowFilter } from "./../utils/mixins";


export default {
  name: "AdminTweetElement",
  mixins: [fromNowFilter, emptyImageFilter],
  props: {
    initialAdminTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      adminTweet: this.initialAdminTweet,      
      isProcessing: false,
    };
  }, 
  methods: {    
    async removeTweet(tweetId) {
      try {  
        this.isProcessing = true;      
        const { data } = await adminAPI.deleteTweet({tweetId});
        console.log("data=", data);        

        //停在此邊

        this.isProcessing = false;
      } catch (error) {
        console.error(error.message);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "目前無法取消該貼文，請稍後再試",
        });
      }
    },
  },
};
</script>
