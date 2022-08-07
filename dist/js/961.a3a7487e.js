"use strict";(self["webpackChunkalphitter"]=self["webpackChunkalphitter"]||[]).push([[961],{85882:(e,t,r)=>{r.d(t,{Z:()=>f});r(68309);var i=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"relative"}},[e.replyModalShow?t("PopoutReply"):e._e(),e.writingTweetModalShow?t("PopoutWritingTweet"):e._e(),t("div",{attrs:{id:"navpillHeader-container"}},[e._m(0),t("div",{staticClass:"navpill-info-container flex-column"},[t("router-link",{staticClass:"navpillHeader-title",attrs:{to:{name:"user-tweets"}}},[e._v(" "+e._s(e.currentUser.name)+" ")]),t("p",{staticClass:"post-number-hint"},[e._v(" "+e._s(e.currentUser.tweetsCount)+" "),t("span",[e._v("推文")])])],1)])],1)},n=[function(){var e=this,t=e._self._c;return t("a",{attrs:{href:"javascript:history.back()"}},[t("img",{staticClass:"arrow-icon",attrs:{src:r(57139),alt:"回到上一頁"}})])}],o=r(4648),s=r(63822),l=r(16434),a=r(16945);const c={name:"NavpillHeader",components:{PopoutReply:l["default"],PopoutWritingTweet:a["default"]},data:function(){return{isLoading:!0}},computed:(0,o.Z)({},(0,s.rn)(["currentUser","replyModalShow","writingTweetModalShow"]))},u=c;var d=r(1001),w=(0,d.Z)(u,i,n,!1,null,null,null);const f=w.exports},86503:(e,t,r)=>{r.d(t,{Z:()=>d});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex",attrs:{id:"navpillUser-container"}},[t("div",{staticClass:"navpill-title-container"},[e.currentUser.id===e.user.id?t("router-link",{staticClass:"navpill-title",class:e.isFollowerActive,attrs:{to:{name:"user-followerlist"}}},[e._v(" 追隨者 ")]):t("router-link",{staticClass:"navpill-title",class:e.isFollowerActive,attrs:{to:{name:"user-id-followerlist",params:{userId:e.user.id}}}},[e._v(" 追隨者 ")])],1),t("div",{staticClass:"navpill-title-container"},[e.currentUser.id===e.user.id?t("router-link",{staticClass:"navpill-title",class:e.isFollowingActive,attrs:{to:{name:"user-followinglist"}}},[e._v(" 正在追隨 ")]):t("router-link",{staticClass:"navpill-title",class:e.isFollowingActive,attrs:{to:{name:"user-id-followinglist",params:{userId:e.user.id}}}},[e._v(" 正在追隨 ")])],1)])},n=[],o=r(4648),s=r(63822);const l={name:"NavpillUserFollow",props:{initialUser:{type:Object,default:function(){return{id:-1,account:"",email:"",name:"",avatar:"",cover:"",introduction:"",role:"user",followingCount:-1,followerCount:-1}}},initialFollowerActive:{type:String,default:""},initialFollowingActive:{type:String,default:""}},data:function(){return{user:(0,o.Z)({},this.initialUser),isFollowerActive:this.initialFollowerActive,isFollowingActive:this.initialFollowingActive,routeName:"",isLoading:!0}},computed:(0,o.Z)({},(0,s.rn)(["currentUser"])),watch:{initialUser:function(e){this.user=(0,o.Z)((0,o.Z)({},this.user),e),this.user=e},initialFollowerActive:function(e){this.isFollowerActive=e},initialFollowingActive:function(e){this.isFollowingActive=e}}},a=l;var c=r(1001),u=(0,c.Z)(a,i,n,!1,null,null,null);const d=u.exports},75961:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex justify-content-center"},[t("NavBar"),t("div",{staticClass:"main-wrapper"},[t("NavpillHeader"),t("NavpillUserFollow",{attrs:{"initial-user":e.user,"initial-follower-active":e.isFollowerActive,"initial-following-active":e.isFollowingActive}}),t("div",{staticClass:"container-for-scroll scrollbar"},[t("router-view",{attrs:{"initial-followers":e.followers,"initial-followings":e.followings},on:{fromFollowingList:e.updatePage,fromFollowerList:e.updatePage}})],1)],1),t("div",{attrs:{id:"recommendColumn-container"}},[e._m(0),e.isRecommendUsersLoading?t("LoadingSpinner"):t("RecommendColumn",{attrs:{"initial-recommend-users":e.recommendUsers},on:{updateRecommendColumn:e.updatePage}})],1)],1)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"recommendHeader"},[t("h1",[e._v("推薦跟隨")])])}],o=r(50124),s=r(48534),l=r(4648),a=(r(9653),r(68309),r(21249),r(5212),r(41539),r(24285)),c=r(69480),u=r(85882),d=r(86503),w=r(76163),f=r(78390),v=r(63822),m=r(69238);const p={name:"UserOtherFollow",components:{NavBar:a.Z,RecommendColumn:c.Z,NavpillHeader:u.Z,NavpillUserFollow:d.Z,LoadingSpinner:m.Z},beforeRouteUpdate:function(e,t,r){var i=e.params.userId;this.userId=Number(i),this.fetchUser(this.userId),this.fetchRecommendUsers(),this.updateRouteName(e.name),r()},data:function(){return{user:{id:-1,account:"",email:"",name:"",avatar:"",cover:"",introduction:"",role:"user",followingCount:-1,followerCount:-1},userId:-1,followers:[],followings:[],currentUserFollowings:[],recommendUsers:[],isFollowerActive:"",isFollowingActive:"",isProcessing:!1,isRecommendUsersLoading:!0}},computed:(0,l.Z)({},(0,v.rn)(["currentUser"])),created:function(){var e=this.$route.params.userId;this.userId=Number(e),this.fetchUser(this.userId),this.fetchRecommendUsers(),this.updateRouteName(this.$route.name)},methods:{updateRouteName:function(e){this.isFollowerActive="user-id-followerlist"===e?"navpill-title-active":"",this.isFollowingActive="user-id-followinglist"===e?"navpill-title-active":""},updatePage:function(){this.fetchFollowingsFollowers(this.userId),this.fetchRecommendUsers()},fetchFollowingsFollowers:function(e){var t=this;return(0,s.Z)((0,o.Z)().mark((function r(){var i,n,s;return(0,o.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.Z.getUserFollowers({userId:e});case 3:return i=r.sent,r.next=6,f.Z.getUserFollowings({userId:e});case 6:return n=r.sent,r.next=9,f.Z.getUserFollowings({userId:t.currentUser.id});case 9:s=r.sent,t.currentUserFollowings=s.data,t.followers=i.data.map((function(e){return(0,l.Z)((0,l.Z)({},e),{},{isFollowed:t.currentUserFollowings.some((function(t){return t.followingId===e.followerId}))})})),t.followings=n.data.map((function(e){return(0,l.Z)((0,l.Z)({},e),{},{isFollowed:t.currentUserFollowings.some((function(t){return t.followingId===e.followingId}))})})),r.next=19;break;case 15:r.prev=15,r.t0=r["catch"](0),console.error(r.t0.message),w.FN.fire({icon:"error",title:"無法 fetch Follow 資料，請稍後再試"});case 19:case"end":return r.stop()}}),r,null,[[0,15]])})))()},fetchUser:function(e){var t=this;return(0,s.Z)((0,o.Z)().mark((function r(){var i,n,s,a,c,u,d,v,m,p,g,h,A;return(0,o.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.Z.getUserFollowings({userId:e});case 3:return i=r.sent,r.next=6,f.Z.getUserFollowers({userId:e});case 6:return n=r.sent,r.next=9,f.Z.getUserFollowings({userId:t.currentUser.id});case 9:return s=r.sent,t.currentUserFollowings=s.data,t.followings=i.data.map((function(e){return(0,l.Z)((0,l.Z)({},e),{},{isFollowed:t.currentUserFollowings.some((function(t){return t.followingId===e.followingId}))})})),t.followers=n.data.map((function(e){return(0,l.Z)((0,l.Z)({},e),{},{isFollowed:t.currentUserFollowings.some((function(t){return t.followingId===e.followerId}))})})),r.next=15,f.Z.getUser({userId:e});case 15:a=r.sent,c=a.data,u=c.id,d=c.account,v=c.email,m=c.name,p=c.avatar,g=c.cover,h=c.introduction,A=c.role,t.user=(0,l.Z)((0,l.Z)({},t.user),{},{id:u,account:d,email:v,name:m,avatar:p,cover:g,introduction:h,role:A,followingCount:t.followings.length,followerCount:t.followers.length}),r.next=25;break;case 21:r.prev=21,r.t0=r["catch"](0),console.error(r.t0.message),w.FN.fire({icon:"error",title:"無法取得 User 資料，請稍後再試"});case 25:case"end":return r.stop()}}),r,null,[[0,21]])})))()},fetchRecommendUsers:function(){var e=this;return(0,s.Z)((0,o.Z)().mark((function t(){var r,i,n,s;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isRecommendUsersLoading=!0,t.next=4,f.Z.getUserFollowings({userId:e.currentUser.id});case 4:return r=t.sent,i=r.data,n=i,t.next=9,f.Z.getTopUsers();case 9:s=t.sent,e.recommendUsers=s.data.map((function(e){return(0,l.Z)((0,l.Z)({},e),{},{isFollowed:n.some((function(t){return t.followingId===e.id}))})})),e.isRecommendUsersLoading=!1,t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](0),console.error(t.t0),e.isRecommendUsersLoading=!1,w.FN.fire({icon:"error",title:"無法取得 RecommendUsers 資料，請稍後再試"});case 19:case"end":return t.stop()}}),t,null,[[0,14]])})))()}}},g=p;var h=r(1001),A=(0,h.Z)(g,i,n,!1,null,null,null);const U=A.exports},57139:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABTSURBVHgBrdLRCQAgCATQo0ncfylHKRTqQwrM88Cojx6UYl6iqlNEvDLBCwBQQyJg5y+kChyEARxhAUc2UC27P9CRlufYQn/s3tAtZqH+sY9QFlmZh9qG/+G4HQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=961.a3a7487e.js.map