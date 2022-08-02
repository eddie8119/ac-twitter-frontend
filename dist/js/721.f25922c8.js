(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[721],{75721:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});n(68309);var s=function(){var e=this,t=e._self._c;return t("div",e._l(e.followings,(function(n){return t("div",{key:n.followingId,attrs:{id:"user-follower-list-container"}},[n.isFollowed?t("button",{staticClass:"user-follow-btn empty-btn-style",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.removeFollowing(n.followingId)}}},[e._v(" 正在跟隨 ")]):t("button",{staticClass:"user-follow-btn empty-btn-style",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(n.followingId)}}},[e._v(" 跟隨 ")]),t("img",{staticClass:"user-headshot",attrs:{src:e._f("emptyImage")(n.avatar),alt:"個人頭像"}}),t("div",{staticClass:"ml-2"},[t("div",{},[t("router-link",{staticClass:"user-name",attrs:{to:{name:"user-id-tweets",params:{userId:n.followingId}}}},[e._v(" "+e._s(n.name)+" ")]),t("div",{staticClass:"user-acount"},[t("span",[e._v("@")]),e._v(" "+e._s(n.account)+" ")])],1),t("p",{staticClass:"tweet-content mt-4"},[e._v(" "+e._s(n.introduction)+" ")])])])})),0)},o=[],r=n(50124),i=n(48534),l=n(4648),a=(n(38862),n(26833),n(83459)),c=n(76163),u=n(78390);const f={name:"UserFollowingList",mixins:[a.Lf],props:{initialFollowings:{type:Array,required:!0}},data:function(){return{followings:this.initialFollowings}},watch:{initialFollowings:function(e){this.followings=(0,l.Z)((0,l.Z)({},this.followings),e),this.followings=e}},methods:{addFollowing:function(e){var t=this;return(0,i.Z)((0,r.Z)().mark((function n(){var s,o,i,l,a,f,g;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.isProcessing=!0,n.next=4,u.Z.addFollowing({userId:e});case 4:s=n.sent,o=s.data,console.log("add @UserFollowingList=",o),i=JSON.parse(JSON.stringify(t.followings)),l=Object.values(i),a=0,f=l;case 10:if(!(a<f.length)){n.next=18;break}if(g=f[a],g.followingId!==e){n.next=15;break}return g.isFollowed=!0,n.abrupt("break",18);case 15:a++,n.next=10;break;case 18:t.followings=l,t.$emit("fromFollowingList"),t.isProcessing=!1,n.next=28;break;case 23:n.prev=23,n.t0=n["catch"](0),console.error(n.t0.message),t.isProcessing=!1,c.F.fire({icon:"error",title:"目前無法跟隨使用者，請稍後再試"});case 28:case"end":return n.stop()}}),n,null,[[0,23]])})))()},removeFollowing:function(e){var t=this;return(0,i.Z)((0,r.Z)().mark((function n(){var s,o,i,l,a,f,g;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.isProcessing=!0,n.next=4,u.Z.removeFollowing({userId:e});case 4:s=n.sent,o=s.data,console.log("remove @UserFollowingList=",o),i=JSON.parse(JSON.stringify(t.followings)),l=Object.values(i),a=0,f=l;case 10:if(!(a<f.length)){n.next=18;break}if(g=f[a],g.followingId!==e){n.next=15;break}return g.isFollowed=!1,n.abrupt("break",18);case 15:a++,n.next=10;break;case 18:t.followings=l,t.$emit("fromFollowingList"),t.isProcessing=!1,n.next=28;break;case 23:n.prev=23,n.t0=n["catch"](0),console.error(n.t0.message),t.isProcessing=!1,c.F.fire({icon:"error",title:"目前無法取消跟隨使用者，請稍後再試"});case 28:case"end":return n.stop()}}),n,null,[[0,23]])})))()}}},g=f;var w=n(1001),v=(0,w.Z)(g,s,o,!1,null,null,null);const d=v.exports},44699:(e,t,n)=>{var s=n(19781),o=n(1702),r=n(81956),i=n(45656),l=n(55296).f,a=o(l),c=o([].push),u=function(e){return function(t){var n,o=i(t),l=r(o),u=l.length,f=0,g=[];while(u>f)n=l[f++],s&&!a(o,n)||c(g,e?[n,o[n]]:o[n]);return g}};e.exports={entries:u(!0),values:u(!1)}},26833:(e,t,n)=>{var s=n(82109),o=n(44699).values;s({target:"Object",stat:!0},{values:function(e){return o(e)}})}}]);
//# sourceMappingURL=721.f25922c8.js.map