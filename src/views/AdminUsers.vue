<template>
  <div class="d-flex justify-content-center"> 
    <NavBar />
    <div class="admin-main-wrapper ml-6">
      <NavpillHeaderMain />
      <div class="y-scroll scrollbar">
        <AdminUserCard />
      </div>
    </div>   
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import NavpillHeaderMain from '../components/NavpillHeaderMain.vue';
import AdminUserCard from '../components/AdminUserCard.vue';


export default {
	name: 'AdminMain',
	components: {
		NavBar,		
		NavpillHeaderMain,
    AdminUserCard,		
	},	
	data() {
		return {
					
		};
	},
};
</script>
