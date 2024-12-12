import React, { useState } from 'react';
import { Typography, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import Login from './Login';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  
  const navigate = useNavigate();
  const { Title } = Typography;
  
  const onFinish = (values) => {
    console.log('Success:', values);
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
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
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
 
