import { login } from "@/features/login-form/api/auth";
import { LoginFormDTO } from "@/features/login-form/api/dto/auth.dto";
import { Button, Form, Input,notification } from "antd";
import { setCookie } from "cookies-next";
import React from "react";

export const LoginForm: React.FC = ()=>{


    const onSubmit = async (values:LoginFormDTO) => {
      try {
          const { access_token } = await login(values)

          notification.success({
              message:'Успешно',
              description:"Переходим в админ-панель...",
              duration:2,
          })

          setCookie('accessToken', access_token);
      }catch ( err ) {
          console.warn('LoginForm', err)
      }
    }

    return <div >
        <Form
            name={'basic'}
            labelCol={{
                span:8,
            }}
            onFinish={onSubmit}
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
