import { Button, Form, Input } from "antd";
import React from "react";

export const LoginForm: React.FC = ()=>{
    return <div >
        <Form
            name={'basic'}
            labelCol={{
                span:8,
            }}
        >
            <Form.Item
                label={'Email'}
                name={'email'}
                rules={[
                    {
                        required:true,
                        message:'Укажите почту'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={'Пароль'}
                name={'password'}
                rules={[
                    {
                        required:true,
                        message:'Укажите пароль'
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset:8,
                    span:16
                }}
            >
                <Button htmlType={'submit'}>Войти</Button>
            </Form.Item>
        </Form>
    </div>


}
