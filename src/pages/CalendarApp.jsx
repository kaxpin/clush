import { useLocation } from 'react-router-dom';
import './index.css';
// import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import { useEffect, useState } from 'react';
import { configConsumerProps } from 'antd/es/config-provider';
// import type { Dayjs } from 'dayjs';

const getListData = (value) => {
    let listData = []; // Specify the type of listData
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        // console.log("확인" +  JSON.stringify(month())
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event......' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  };
  
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export default function CalendarApp() {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      };
    
      const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type } text={item.content} />
              </li>
            ))}
          </ul>
        );
      };
    
      const cellRender = (current, info) => {
        // console.log(info)
        // console.log("-----------------------------------")
        // for(let i in info){
        //     if(i =="locale"){
        //         console.log("info["+i+"]" )
        //         for(let j in info[i]){
        //             console.log(j)
        //         }
        //     }else{
        //         console.log("info["+i+"]" + info[i])

        //     }
        // }
        // console.log("current:" + current)

        if (info.type === 'date') return dateCellRender(current);
        
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
      };

      const location = useLocation(); // 현재 URL 정보 가져오기
      
      useEffect(()=>{
        // setCurPath(location.pathname)
        // console.log("상태 변경 감지");
        // console.log(location.pathname);
      }, [location])
    
    
      return <Calendar cellRender={cellRender} 
              // onPanelChange={(item)=>{
              //     console.log(item)
              // }}
              onSelect={(item, type)=>{
                if(type.source === "date") {
                  console.log(item)
                }
              }}
              />
}