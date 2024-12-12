import React, { useState } from 'react';
import { Typography, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import { checkDupId, createAccount } from './authApiService';


export default function Register() {
  
  const navigate = useNavigate()
  const { Title } = Typography
  
  const onFinish = (values) => {
    checkDupId(values.userId)
        .then((res) => {
            if(!res.data.data){
                console.log("eww")
                alert("아이디가 중복됩니다")
                return
            }
            createAccount(values)
                .then((res) => {
                    if(res.status == 200){
                        alert("가입이 완료되었습니다.");
                        navigate('/')
                    }
            });
     
        })
};
  
  return(<>
    {/* <h2 style={ }>login</h2> */}
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 17 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item>
            <Title level={3} style={{ textAlign: 'right' }}>
            회원가입
            </Title>
        </Form.Item>

        <Form.Item      
            label="Username"
            name="userName"
            rules={[{ required: true, message: 'Please input your username!' }]}
            
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Id"
            name="userId"
            rules={[{ required: true, message: 'Please input your Id!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="userPw"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item label={null} style={{ display: 'flex', justifyContent: 'center', marginLeft: '16%'}}>
            <Button type="primary" htmlType="submit" >
                회원가입
            </Button>

        </Form.Item>
    </Form>
    </>
    )
};
 
