import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default Headers = (props)=>{

  const items1 = ['Calendar', 'Todo', 'Login'].map((key) => ({
    key,
    label: `${key}`,
  }))
  const navigate = useNavigate();

  const handleClickMenu = (param)=>{

    if(param === "Login"){
      props.setMenuType(param)
      navigate('/' + param)
      return;
    }
    
    props.setMenuType(()=>{ navigate('/' + param)
      return param
    });

  }

  useEffect(()=>{

  }, [props.menuType])

    return(
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={['Calendar']}
            items={items1}
            style={{ 
              flex: 1, 
              minWidth: 0,
            }}
            onClick={ (e)=>{  handleClickMenu(e.key) }}
            selectedKeys={[props.menuType ? `${props.menuType[0].toUpperCase()}${props.menuType.slice(1)}` : '']}
          />
            
          
        </Header>
    )
}