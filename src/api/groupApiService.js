import { apiClient } from "./apiClient";

//그룹 검색
export const searchGroup = (groupId)=>{
    apiClient.get(`/group/search/${groupId}`)
}

//그룹 생성
export const createGroup = (data, userId)=>{
    apiClient.post(`/group/create`, {
        data : data
    })
}

//그룹 가입 신청
export const applyGroup = (userId)=>{
    apiClient.post(`/group/apply`, {
        applicationId: userId
    })
}

//그룹 삭제
export const deleteGroup = (userId, groupId)=>{
    apiClient.post(`group/delete`,{
        masterId: userId,
        groupId: groupId
    })
}

//그룹 maseter 위임
export const delegateMaster = (userId)=>{
    apiClient.get(`group/delegate/master/${userId}`)
} 