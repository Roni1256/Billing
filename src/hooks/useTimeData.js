import React from 'react'

export const useTimeData = () => {
 
    const date=new Date()

    const presentDate=add0(date.getDate())
    const month=add0(date.getMonth()+1)
    const year=add0(date.getFullYear())
    const hour= add0(date.getHours())
    const min=add0(date.getMinutes())
    const sec=add0(date.getSeconds())
    const time=`${hour}:${min}:${sec}`

    function add0(value){
        return value<10?("0"+value):value;
    }
    const dates=`${presentDate}/${month}/${year}`

    return [dates,time]

}
