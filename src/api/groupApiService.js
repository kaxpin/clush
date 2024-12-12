import { apiClient } from "./apiClient";

//그룹 검색
export const searchGroup = (groupId) => {
    return apiClient.get(`/group/search/${groupId}`)
}

//그룹 생성
export const createGroup = (data, userId) => { 
    return apiClient.post(`/group/create`, {
        data : data
    })
}

//그룹 가입 신청
export const applyGroup = (userId) => {
    return apiClient.post(`/group/apply`, {
        applicationId: userId
    })
}

//그룹 삭제
export const deleteGroup = (userId, groupId) => {
    return apiClient.post(`group/delete`,{
        masterId: userId,
        groupId: groupId
    })
}

//그룹 maseter 위임
export const delegateMaster = (userId) => {
    return apiClient.get(`group/delegate/master/${userId}`)
} 