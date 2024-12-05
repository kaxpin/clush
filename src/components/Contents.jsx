import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import CalendarApp from '../calendar/CalendarApp';
import TodoApp from '../todo/TodoApp';

export default function Contents(props){
    const location = useLocation();

    useEffect(()=>{

    }, [location])
    const { Content, Sider } = Layout;

    const items2= [UserOutlined, LaptopOutlined, NotificationOutlined].map(
        (icon, index) => {
            const key = String(index + 1);
            
            return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            
            children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
            }),
        };
        },
    );

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return(
    <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{props.menuType}</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
        style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
            <Sider style={{ background: colorBgContainer }} width={200}>
                <Menu
                mode="inline"
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={items2}
                />
            </Sider>
        
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Routes>
                <Route path='/Calendar' element={ <CalendarApp />}/>
                <Route path='/Todo' element={ < TodoApp/>} />
            </Routes>
            </Content>

        </Layout>
    </Content>
    )   
}