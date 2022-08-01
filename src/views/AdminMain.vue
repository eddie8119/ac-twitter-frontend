<template>
  <div class="d-flex justify-content-center">
    <NavBar />
    <div class="main-wrapper">
      <NavpillHeaderMain />      
    </div>   
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import NavpillHeaderMain from '../components/NavpillHeaderMain.vue';



export default {
	name: 'MainPage',
	components: {
		NavBar,		
		NavpillHeaderMain,		
	},
	data() {
		return {
			
		};
	},
	created() {
		
	},
	methods: {
		
	},
};
</script>
