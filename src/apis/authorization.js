import { apiHelper } from './../utils/helpers'

export default {
  signIn({ account, password }) {
    return apiHelper.post('/signin', {
      account,
      password
    })
  },  
  signUp(data) {
    return apiHelper.post('/users', {
      ...data
    })
  },
  adminSignIn({ account, password }) {
    return apiHelper.post('/signin', {
      account,
      password
    })
  },
  deleteTweet({tweetId}) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  },
  getUsers() {
    return apiHelper.get('/admin/users')
  }
}
