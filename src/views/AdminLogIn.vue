<template>
  <div id="admin-login-container">
    <img
      class="logo-img"
      src="../assets/logo@2.png"
      alt=""
    >
    <h1>後台登入</h1>
    <form
      class="form-container"
      @submit.prevent.stop="handleSubmit"
    >
      <div class="form-element-group">
        <label for="admin-account">帳號</label>
        <input
          v-if="account.length > 10"
          id="admin-account"
          v-model="account"
          type="text"
          class="admin-account"
          placeholder="請輸入帳號"
          style="border-bottom: 2px solid red;"
        >
        <input
          v-else
          id="admin-account"
          v-model="account"
          type="text"
          class="admin-account"
          placeholder="請輸入帳號"
        >
        <span
          v-show="account.length > 10"
          style="position: absolute; left: 0px; bottom: -18px; font-size:12px; color: red;"
        >
          字數超出上限！
        </span>
        <span
          v-show="account.length"
          style="position: absolute; right: 0px; bottom: -18px; font-size:12px;"
        >
          {{ account.length }}/10
        </span>
      </div>
      <div class="form-element-group">
        <label for="admin-password">密碼</label>
        <input
          id="admin-password"
          v-model="password"
          type="password"
          class="admin-password"
          placeholder="請輸入密碼"
        >
      </div>
      <button
        class="login-btn main-btn-style"
        type="submit"
        :disabled="isProcessing"
      >
        登入
      </button>
      <router-link
        :to="{
          name: 'login' // 導引至 登入頁
        }"
        class="submit-other-choice text-right"        
      >
        前台登入
      </router-link>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization';
import { Toast } from './../utils/helpers';
import store from "./../store";

export default {
  name: 'AdminLogIn',
  data () {
    return {
      account: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account || !this.password){
          Toast.fire({
            icon: 'warning',
            title: '請填入 account 和 password'
          })
          return
        }
        this.isProcessing = true

        const response = await authorizationAPI.adminSignIn({
          account: this.account,
          password: this.password
        })

        const {data} = response
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 將伺服器回傳的 token 保存在 localStorage 中
        localStorage.setItem('token', data.token)
        
        await store.dispatch("fetchCurrentUser");
        // 透過 setCurrentUser 把從 API 獲得的 data.user 存到 Vuex 的 state 中
        this.$store.commit('setCurrentUser', data.user)

        if(data.user.role === 'user') {
          Toast.fire({
            icon: 'error',
            title: '帳號不存在'
          })
          this.$store.commit('revokeAuthentication')
          this.$router.push("/login");
          return
        } else {
          Toast.fire({
            icon: 'success',
            title: `管理者-${this.account}-登入成功`
          })
        }

        this.$router.push('/admin/main') // 成功登入後進行轉址
      }catch (error) {
        this.password = ''
        this.isProcessing = false

        if (error.message === "Error: User didn't exist!") {
          error.message = '帳號不存在！'
        } else {
          error.message = '輸入的帳號密碼有誤'
        }

        Toast.fire({
          icon: 'warning',
          title: `${error.message}`
        })
      }
    }
  }
}
</script>  

