import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";

export default Headers = (props)=>{

  const items1 = ['Calendar', 'Todo'].map((key) => ({
    key,
    label: `${key}`,
  }))
  const navigate = useNavigate();
 
  const handleClickMenu = (param)=>{
    props.setMenuType(()=>{ navigate('/' + param)
      return param
    });
  }
    return(
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['Calendar']}
            items={items1}
            style={{ flex: 1, minWidth: 0 }}
            onClick={ (e)=>{  handleClickMenu(e.key) }}
          />
 
          
        </Header>
    )
}