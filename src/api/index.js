import axios from "axios";

const instance = axios.create({
  baseURL: "http://marina-backender.org.kg/cookscorner",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config)=>{
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
})

export const postRegister = (data) => instance.post(`/users/signup/`, data);
export const postLogin = (data) => instance.post(`/users/login/`, data);
