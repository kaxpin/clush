import React, { useState } from 'react';
import { App as  AntdApp} from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Headers from './components/Headers';
import Contents from './components/Contents';

const { Content, Footer, Sider } = Layout;

  // const items1 = ['Calendar', 'Todo'].map((key) => ({
  //   key,
  //   label: `${key}`,
  // }));
 
const App = () => {
  
  const [menuType, setMenuType] = useState('Calendar');
 
  const { message, modal, notification } = AntdApp.useApp();

  const showMessage = (str) => {
    // message.success(str);
    message.success(str);
  };

  const showModal = (str) => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
      content: str,
      centered: true,
      duration: 0.9
    });
  };

  const showNotification = () => {
    notification.info({
      message: 'Notification topLeft',
      description: 'Hello, Ant Design!!',
      placement: 'bottomRight',
      duration: 1.2
    });
  };

  return ( 
    <Layout>
        <BrowserRouter>
        <Headers menuType={menuType} setMenuType={setMenuType}/>
        <Contents menuType={menuType} setMenuType={setMenuType}/>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
            </BrowserRouter>
      </Layout> 
  );
};

export default App;
