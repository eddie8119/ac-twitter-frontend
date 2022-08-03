<template>
  <div class="d-flex justify-content-center"> 
    <NavBar />
    <div class="admin-main-wrapper ml-6">
      <NavpillHeaderMain />
      <div class="y-scroll scrollbar">
        <AdminTweetElement
          v-for="adminTweet in adminTweets"
          :key="adminTweet.id"
          :initial-admin-tweet="adminTweet"
        />
      </div>
    </div>   
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import NavpillHeaderMain from '../components/NavpillHeaderMain.vue';
import AdminTweetElement from '../components/AdminTweetElement.vue';
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
	name: 'AdminMain',
	components: {
		NavBar,		
		NavpillHeaderMain,
    AdminTweetElement,		
	},	
	data() {
		return {
			adminTweets:[],
			isLoading: true,			
		};
	},
	created() {
		this.fetchAdminTweets()		
	},
	methods: {
		async fetchAdminTweets(){			
			try {
				this.isLoading = true;
				const responseAdminTweets = await adminAPI.getAdminTweets()
				this.adminTweets = Array.from(responseAdminTweets.data)
				
				this.isLoading = false
			} catch(error) {
				console.log(error)
				this.isLoading = false
				Toast.fire({
					icon: 'error',
					title: '無法取得推文清單，請稍後再試'
        })
			}
		}		
	},
};
</script>
