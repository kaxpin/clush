import { apiClient } from "./apiClient";

//회원가입
export const createAccount = (data)=>{
    apiClient.post(`/auth/signup/`, data)
}

//아이디 중복검사
export const checkDupId = (userId)=>{
    apiClient.get(`/auth/signup/check`, data)
}
 
//로그인
export const login = (data) => {
    apiClient.post(`/auth/login}`, data)
}

export const logout = () => {
    apiClient.post(`/auth/logout`)
}
