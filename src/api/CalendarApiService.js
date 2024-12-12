import { apiClient } from "./apiClient";

//캘린더
export const getCalendarByMonth = (data, userId) => {
    return apiClient.get(`/calendar-By-Month/${data}/${userId}`)
}

export const getCalendarByYear = (data, userId) => {
    return apiClient.get(`/calendar-By-year/${data}/${userId}`)
}

//생성
export const createCalendar = (data, userId) => {
    return apiClient.put(`/insert-calendar/${data}/${userId}`, {
        data
    })
}

//수정
export const uodateCalendarByMonth = (data, userId)=> {
    return apiClient.patch(`/update-calendar/${data}/${userId}`, {
        data
    })
}

//삭제
export const deleteCalendar = (scheduleId, userId) => {
    return apiClient.delete(`/delete-By-Month/${scheduleId}/${userId}`)
}
 