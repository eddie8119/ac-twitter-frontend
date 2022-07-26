import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from "../views/LoginForm.vue";
import MainPage from "../views/MainPage.vue";
import NotFound from "../views/NotFound.vue";
import store from "./../store";

Vue.use(VueRouter);

  // 如果 token 身分是 user 但是想去後台，導引到 /admin
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser;
  if (currentUser && currentUser.role === 'user') { // currentUser is not Admin
    next("/admin");
    return;
  }
  next();
};
// 如果 token 身分是 admin 但是想去前台，導引到 /login
const authorizeIsUser = (to, from, next) => {
  const currentUser = store.state.currentUser;
  if (currentUser && currentUser.role === 'admin') { // currentUser is not User
    next("/login");
    return;
  }
  next();
};

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/login",
  },
  {
    path: "/regist",
    name: "regist",
    component: () => import("../views/RegistForm.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingPage.vue"),
    beforeEnter: authorizeIsUser,
  },
  {
    path: "/main",
    name: "main",
    component: MainPage,
    beforeEnter: authorizeIsUser,
    children: [
      {
        path: "tweet",
        name: "modal-tweet",
        component: () => import("../components/PopoutWritingTweet.vue"),
      },
      {
        path: "reply-modal",
        name: "main-reply-modal",
        component: () => import("../components/PopoutReply.vue")
      }
    ],    
  },  
  {
    path: "/replylist",
    name: "replylist",
    component: () => import("../views/ReplyList.vue"),
    children: [
      {
        path: "reply-modal",
        name: "reply-list-modal",
        component: () => import("../components/PopoutReply.vue")
      }
    ],
    beforeEnter: authorizeIsUser,
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserSelf.vue"),
    beforeEnter: authorizeIsUser,
    children: [
      {
        path: "self/edit",
        name: "user-self-edit",
        component: () => import("../components/PopoutEditProfile.vue"),
      },
      {
        path: "self/tab=tweets",
        name: "user-tweets",
        component: () => import("../components/UserPostList.vue"),
      },
      {
        path: "self/tab=replies&tweets",
        name: "user-replied_tweets",
        component: () => import("../components/UserReplyList.vue"),
      },
      {
        path: "self/like",
        name: "user-likes",
        component: () => import("../components/UserLikeList.vue"),
      },
    ],
  },
  {
    path: "/user/:userId",
    name: "user-id",
    component: () => import("../views/UserOther.vue"),
    beforeEnter: authorizeIsUser,
    children: [
      {
        path: "tab=tweets",
        name: "user-id-tweets",
        component: () => import("../components/UserPostList.vue"),
      },
      {
        path: "tab=replies&tweets",
        name: "user-id-replied_tweets",
        component: () => import("../components/UserReplyList.vue"),
      },
      {
        path: "like",
        name: "user-id-likes",
        component: () => import("../components/UserLikeList.vue"),
      },
    ]
  },
  {
    path: "/user",
    name: "user-follower",
    component: () => import("../views/UserFollow.vue"),
    beforeEnter: authorizeIsUser,
    children: [
      {
        path: "self/follower",
        name: "user-followerlist",
        component: () => import("../components/UserFollowerList.vue"),
      },
      {
        path: "self/following",
        name: "user-followinglist",
        component: () => import("../components/UserFollowingList.vue"),
      },
    ],
  },
  {
    path: "/user/:userId",
    name: "user-id-follow",
    component: () => import("../views/UserOtherFollow.vue"),
    beforeEnter: authorizeIsUser,
    children: [
      {
        path: "follower",
        name: "user-id-followerlist",
        component: () => import("../components/UserFollowerList.vue"),
      },
      {
        path: "following",
        name: "user-id-followinglist",
        component: () => import("../components/UserFollowingList.vue"),
      },
    ],
  },
  {
    path: "/admin/main",
    name: "admin-main",
    component: () => import("../views/AdminMain.vue"),
    beforeEnter: authorizeIsAdmin,
  },
  {
    path: "/admin/users",
    name: "admin-users",
    component: () => import("../views/AdminUsers.vue"),
    beforeEnter: authorizeIsAdmin,
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminLogIn.vue"),
  },

  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes,
});

router.beforeEach(async (to, from, next) => {
  // 每一次使用者點擊不同頁面的路由，都需要檢查使用者 token 是否過期

  // 從 localStorage 取出 token
  const token = localStorage.getItem("token");
  const tokenInStore = store.state.token;
  let isAuthenticated = store.state.isAuthenticated;

  // 比較 localStorage 和 store 中的 token 是否一樣
  // 有 token 且 localStorage token !== tokenInStore，才向後端驗證
  if (token && token !== tokenInStore) {
    isAuthenticated = await store.dispatch("fetchCurrentUser");
  }
  const pathsWithoutAuthentication = ["login", "regist", "admin"]; // 對於不需要驗證 token 的頁面

  // 如果 token 無效，且進入需要驗證的頁面，則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next("/login");
    return;
  }

  // 如果 token 有效，且進入不需要驗證的頁面，則轉址到 MainPage
  // if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
  //   next("/main");
  //   return;
  // }

  next();
});

export default router;
