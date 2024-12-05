import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TodoApp(){

    const location = useLocation(); // 현재 URL 정보 가져오기
      
    useEffect(()=>{
      // setCurPath(location.pathname)
    //   console.log(location.pathname);
    }, [location])
    
    return <div>Todo</div>

}