"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[943],{20943:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});a(68309);var t=function(){var e=this,s=e._self._c;return s("div",{attrs:{id:"regist-container"}},[s("img",{staticClass:"logo-img",attrs:{src:a(82374),alt:""}}),s("h1",[e._v("建立你的帳號")]),s("form",{staticClass:"form-container",on:{submit:function(s){return s.preventDefault(),s.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[s("div",{staticClass:"form-element-group"},[s("label",{attrs:{for:"user-account"}},[e._v("帳號")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"user-account",attrs:{id:"user-account",type:"text",placeholder:"請輸入帳號"},domProps:{value:e.account},on:{input:function(s){s.target.composing||(e.account=s.target.value)}}})]),s("div",{staticClass:"form-element-group"},[s("label",{attrs:{for:"user-name"}},[e._v("名稱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"user-name",attrs:{id:"user-name",type:"password",placeholder:"請輸入使用者名稱"},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}})]),s("div",{staticClass:"form-element-group"},[s("label",{attrs:{for:"user-name"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"user-email",attrs:{id:"user-email",type:"email",placeholder:"請輸入Email"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})]),s("div",{staticClass:"form-element-group"},[s("label",{attrs:{for:"user-password"}},[e._v("密碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"user-password",attrs:{id:"user-password",type:"password",placeholder:"請輸入密碼"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),s("div",{staticClass:"form-element-group"},[s("label",{attrs:{for:"user-password-confirm"}},[e._v("密碼確認")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],staticClass:"user-password-confirm",attrs:{id:"user-password-confirm",type:"password",placeholder:"請再次輸入密碼"},domProps:{value:e.checkPassword},on:{input:function(s){s.target.composing||(e.checkPassword=s.target.value)}}})]),s("button",{staticClass:"login-btn main-btn-style",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" 註冊 ")]),s("a",{staticClass:"submit-other-choice text-center",attrs:{href:"javascript:history.back()"}},[e._v(" 取消 ")])])])},r=[],o=a(50124),n=a(48534),i=(a(21703),a(96647),a(77214)),c=a(76163);const u={data:function(){return{account:"",name:"",email:"",password:"",checkPassword:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return(0,n.Z)((0,o.Z)().mark((function s(){var a,t;return(0,o.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(s.prev=0,e.account&&e.name&&e.email&&e.password&&e.checkPassword){s.next=4;break}return c.F.fire({icon:"warning",title:"請確認已填寫所有欄位"}),s.abrupt("return");case 4:if(e.password===e.checkPassword){s.next=8;break}return c.F.fire({icon:"warning",title:"兩次輸入的密碼不同"}),e.checkPassword="",s.abrupt("return");case 8:return e.isProcessing=!0,s.next=11,i.Z.signUp({account:e.account,name:e.name,email:e.email,password:e.password,checkPassword:e.checkPassword});case 11:if(a=s.sent,t=a.data,"success"===t.status){s.next=15;break}throw new Error(t.message);case 15:c.F.fire({icon:"success",title:"使用者-".concat(e.account,"-註冊成功")}),e.$router.push("/login"),s.next=23;break;case 19:s.prev=19,s.t0=s["catch"](0),e.isProcessing=!1,c.F.fire({icon:"warning",title:"無法註冊 - ".concat(s.t0.message)});case 23:case"end":return s.stop()}}),s,null,[[0,19]])})))()}}},l=u;var m=a(43736),p=(0,m.Z)(l,t,r,!1,null,null,null);const d=p.exports}}]);
//# sourceMappingURL=943.e79da049.js.map