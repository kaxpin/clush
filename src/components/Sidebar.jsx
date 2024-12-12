import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";
import { useLocation } from 'react-router-dom';

export default function Sidebar(props) {

    // const location = useLocation();

    // useEffect(()=>{

    // }, [location])

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const sideNavInfo = [
        {   name: "내 캘린더",
            icon: UserOutlined,
            detail : `[내캘린더(private는 걍 캘린더하나로하고그안에서(모두공유로할지, 친구 공유로할지)), 
            환경설정(캘린더), 친구 관리] 배열로 내 캘린더`
        },
        {   name: "팀 캘린더",
            icon: LaptopOutlined,
            detail : "[실시간 캘린더 및 일정 관리 (일정을 칼같이 관리함)]"
        },
        {   name: "환경설정",
            icon: UsergroupAddOutlined,
            detail : "[]"
        },


    ];
    const items2= sideNavInfo.map(
        (icon, index) => {
            const key = String(index + 1);
            
            return {
            key: `sub${key}`,
            icon: React.createElement(icon.icon),
            // label: `subnav ${key}`,
            label: icon.name,
            
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

    return(
        <>
            <Sider style={{ background: colorBgContainer }} width={200}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={items2}
                />
            </Sider>
        </>
    )

}
