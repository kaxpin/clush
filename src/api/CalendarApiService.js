import { apiClient } from "./apiClient";

//캘린더
export const getCalendarByMonth = (data, userId)=>{
    apiClient.get(`/calendar-By-Month/${data}/${userId}`)
}

export const getCalendarByYear = (data, userId)=>{
    apiClient.get(`/calendar-By-year/${data}/${userId}`)
}

//생성
export const createCalendar = (data, userId)=>{
    apiClient.put(`/insert-calendar/${data}/${userId}`, {
        data
    })
}

//수정
export const uodateCalendarByMonth = (data, userId)=>{
    apiClient.patch(`/update-calendar/${data}/${userId}`, {
        data
    })
}

//삭제
export const deleteCalendar = (scheduleId, userId)=>{
    apiClient.delete(`/delete-By-Month/${scheduleId}/${userId}`)
}
 