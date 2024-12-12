import React, { useEffect, useState } from 'react';
import { App as  AntdApp, Modal} from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Headers from './components/Headers';
import Contents from './components/Contents';
import useAuthStore from './auth/auth';
import Login from './auth/Login';
import { showMessage } from './modal';

const { Content, Footer, Sider } = Layout;

const App = () => {

  const { isAuthenticated, login, logout } =  useAuthStore();
  
  const [menuType, setMenuType] = useState('');
 
  // const { message, modal, notification } = AntdApp.useApp();


  return ( 
    <Layout>  
        <BrowserRouter>
          <SideEffectComp menuType={menuType} setMenuType={setMenuType}/>
          <Headers menuType={menuType} setMenuType={setMenuType}/>
          <Contents menuType={menuType} setMenuType={setMenuType}/>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </BrowserRouter>
      </Layout> 
  );
};

const SideEffectComp = (props) =>{
  const location = useLocation();

  useEffect(() => {
    props.setMenuType(location.pathname.replace("/",""))
  }, [location]);

  

  return null;   
}  

export default App;
