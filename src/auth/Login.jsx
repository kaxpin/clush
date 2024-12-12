import React, { useState } from 'react';
import { Typography, Button, Checkbox, Form, Input } from 'antd';
import Register from './Register';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    
    const { Title } = Typography;
    const navigate = useNavigate();
    
    const onFinish = (values) => {
    console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [open, setOpen] = useState(false);
 
    return(<>
        {/* <h2 style={ }>login</h2> */}
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 17 }}
            style={{ maxWidth: 600 }}
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

            <Form.Item label={null}  style={{ marginTop: '50px' }}>
                <Button type="primary" htmlType="submit">
                    로그인
                </Button>
                <Button type="default" htmlType="button" style={{ marginLeft: '10px' }} 
                onClick={ ()=>{ navigate('/Register') }} >
                    회원이 아니신가요? 회원가입
                </Button>
                {/* <Register 
                //  onClose={ onClose } 
                 open={open} 
                 setOpen={ setOpen }
                 /> */}



            </Form.Item>
        </Form>
        </>
        )
}