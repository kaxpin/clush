import React, { useEffect, useState } from 'react';
import { App as  AntdApp} from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Headers from './components/Headers';
import Contents from './components/Contents';
import Login from './auth/Login'; 
const { Content, Footer, Sider } = Layout;

const App = () => {

  const [menuType, setMenuType] = useState('');
 
  // const { message, modal, notification } = AntdApp.useApp();

  const { message, modal, notification } = AntdApp.useApp();

  const showMessage = (msg) => {
    message.success(msg);
  };

  const showModal = () => {
    modal.centeredwarning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
      centered: true,
      duration: 0.9
    });
  };

  const showNotification = (item) => {
      notification.info({
        message: item?.message || "message" ,
        description: item?.description || "description",
        placement: 'bottomLeft',
        duration: 1.2
      });
  };


  return ( 
    <Layout>  
        <BrowserRouter>
          <SideEffectComp menuType={menuType} setMenuType={setMenuType}/>
          <Headers menuType={menuType} setMenuType={setMenuType} onModal={showNotification}/>
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
