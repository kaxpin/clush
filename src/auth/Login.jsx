import React, { useState } from 'react';
import { Typography, Button, Checkbox, Form, Input } from 'antd';
import Register from './Register';

export default function Login() {
    
    const { Title } = Typography;
    const onFinish = (values) => {
    console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return(<>
        {/* <h2 style={ }>login</h2> */}
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item>
                <Title level={3} style={{ textAlign: 'right' }}>
                로그인
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

            {/* <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item label={null}  style={{ marginTop: '50px' }}>
                <Button type="primary" htmlType="submit">
                    로그인
                </Button>
                <Button type="default" htmlType="button" style={{ marginLeft: '10px' }} 
                onClick={showDrawer} >
                    회원이 아니신가요? 회원가입
                </Button>
                <Register 
                 onClose={ onClose } 
                 open={open} 
                 setOpen={ setOpen }
                 />
            </Form.Item>
        </Form>
        

        
        </>
        )
}