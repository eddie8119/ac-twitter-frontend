import axios from "axios";
import Swal from "sweetalert2";

const baseURL = "http://localhost:3000/api";
// const baseURL = "https://twitterac.herokuapp.com/api";

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) { // 如果 token 存在的話，則帶入到 headers 當中
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});
