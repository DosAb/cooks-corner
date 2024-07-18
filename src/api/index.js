import axios from "axios";

const instance = axios.create({
  baseURL: "http://marina-backender.org.kg/cookscorner",
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(localStorage.getItem("token"));

// instance.interceptors.request.use((config)=>{
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
// })

export const postRegister = (data) => instance.post(`/users/signup/`, data);
export const postLogin = (data) => instance.post(`/users/login/`, data);
export const getCategory = (token) => instance.get(`/recipes/by-category/?category=Breakfast&page=1&limit=10`,{
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export const postRefreshToken = (refreshToken) => instance.post(`uesrs/login/refresh/`, refreshToken)
