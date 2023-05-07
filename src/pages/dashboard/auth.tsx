import { LoginForm } from "@/features/login-form/login-form";
import { RegisterForm } from "@/features/register-form/register-form";
import { Tabs } from "antd";
import { NextPage } from "next";
import Head from "next/head";

const AuthPage:NextPage = () => {
    return <>
        <Head>
            <title>Dashboard / Auth</title>
        </Head>
        <main className={'flex p-6'}>
            <Tabs
            items={[
                {
                    label:'Войти',
                    key:'1',
                    children: <LoginForm/>,
                },
                {
                    label:'Регистрация',
                    key:'2',
                    children: <RegisterForm/>,
                }
                ]}
            />

        </main>
    </>
}
export default AuthPage;
