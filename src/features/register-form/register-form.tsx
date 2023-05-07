import { RegisterFormDTO } from "./api/dto/register.dto";
import { register } from "./api/register";
import { Button, Form, Input,notification } from "antd";
import { setCookie } from "cookies-next";
import React from "react";

export const RegisterForm: React.FC = ()=>{


    const onSubmit = async (values:RegisterFormDTO) => {
      try {
          const { access_token } = await register(values)

          notification.success({
              message:'Успешно',
              description:"Переходим в админ-панель...",
              duration:2,
          })

          setCookie('accessToken', access_token);
      }catch ( err ) {
          console.warn('RegisterForm', err)
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
                label={'Имя'}
                name={'fullName'}
                rules={[
                    {
                        required:true,
                        message:'Ваше имя'
                    }
                ]}
            >
                <Input />
            </Form.Item>

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
                <Button htmlType={'submit'}>Зарегистрироваться</Button>
            </Form.Item>
        </Form>
    </div>


}
