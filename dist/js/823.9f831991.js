(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[823],{74823:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});r(68309);var s=function(){var e=this,t=e._self._c;return t("div",e._l(e.followers,(function(r){return t("div",{key:r.followerId,attrs:{id:"user-follower-list-container"}},[r.isFollowed?t("button",{staticClass:"user-follow-btn empty-btn-style",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.removeFollowing(r.followerId)}}},[e._v(" 正在跟隨 ")]):t("button",{staticClass:"user-follow-btn empty-btn-style",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(r.followerId)}}},[e._v(" 跟隨 ")]),t("img",{staticClass:"user-headshot",attrs:{src:e._f("emptyImage")(r.avatar),alt:"個人頭像"}}),t("div",{staticClass:"ml-2"},[t("div",{},[t("router-link",{staticClass:"user-name",attrs:{to:{name:"user-id-tweets",params:{userId:r.followerId}}}},[e._v(" "+e._s(r.name)+" ")]),t("div",{staticClass:"user-acount"},[t("span",[e._v("@")]),e._v(" "+e._s(r.account)+" ")])],1),t("p",{staticClass:"tweet-content mt-4"},[e._v(" "+e._s(r.introduction)+" ")])])])})),0)},o=[],n=r(50124),l=r(48534),a=r(4648),i=(r(38862),r(26833),r(83459)),c=r(76163),u=r(78390);const f={name:"UserFollowerList",mixins:[i.Lf],props:{initialFollowers:{type:Array,required:!0}},data:function(){return{followers:this.initialFollowers}},watch:{initialFollowers:function(e){this.followers=(0,a.Z)((0,a.Z)({},this.followers),e),this.followers=e}},methods:{addFollowing:function(e){var t=this;return(0,l.Z)((0,n.Z)().mark((function r(){var s,o,l,a,i,f,w;return(0,n.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,u.Z.addFollowing({userId:e});case 4:s=r.sent,o=s.data,console.log("add @UserFollowerList=",o),l=JSON.parse(JSON.stringify(t.followers)),a=Object.values(l),i=0,f=a;case 10:if(!(i<f.length)){r.next=18;break}if(w=f[i],w.followerId!==e){r.next=15;break}return w.isFollowed=!0,r.abrupt("break",18);case 15:i++,r.next=10;break;case 18:t.followers=a,t.$emit("fromFollowerList"),t.isProcessing=!1,r.next=28;break;case 23:r.prev=23,r.t0=r["catch"](0),console.error(r.t0.message),t.isProcessing=!1,c.F.fire({icon:"error",title:"目前無法跟隨使用者，請稍後再試"});case 28:case"end":return r.stop()}}),r,null,[[0,23]])})))()},removeFollowing:function(e){var t=this;return(0,l.Z)((0,n.Z)().mark((function r(){var s,o,l,a,i,f,w;return(0,n.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,u.Z.removeFollowing({userId:e});case 4:s=r.sent,o=s.data,console.log("remove @UserFollowerList=",o),l=JSON.parse(JSON.stringify(t.followers)),a=Object.values(l),i=0,f=a;case 10:if(!(i<f.length)){r.next=18;break}if(w=f[i],w.followerId!==e){r.next=15;break}return w.isFollowed=!1,r.abrupt("break",18);case 15:i++,r.next=10;break;case 18:t.followers=a,t.$emit("fromFollowerList"),t.isProcessing=!1,r.next=28;break;case 23:r.prev=23,r.t0=r["catch"](0),console.error(r.t0.message),t.isProcessing=!1,c.F.fire({icon:"error",title:"目前無法取消跟隨使用者，請稍後再試"});case 28:case"end":return r.stop()}}),r,null,[[0,23]])})))()}}},w=f;var v=r(43736),d=(0,v.Z)(w,s,o,!1,null,null,null);const p=d.exports},44699:(e,t,r)=>{var s=r(19781),o=r(1702),n=r(81956),l=r(45656),a=r(55296).f,i=o(a),c=o([].push),u=function(e){return function(t){var r,o=l(t),a=n(o),u=a.length,f=0,w=[];while(u>f)r=a[f++],s&&!i(o,r)||c(w,e?[r,o[r]]:o[r]);return w}};e.exports={entries:u(!0),values:u(!1)}},26833:(e,t,r)=>{var s=r(82109),o=r(44699).values;s({target:"Object",stat:!0},{values:function(e){return o(e)}})}}]);
//# sourceMappingURL=823.9f831991.js.map