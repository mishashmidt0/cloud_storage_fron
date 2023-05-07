import { User } from "@/shared/api/dto/profile.dto";
import { logout, profile } from "@/shared/api/profile";
import { Button } from "antd";
import { getCookie } from "cookies-next";
import { GetStaticProps, NextPage } from "next";
import axios from "@/shared/core/axios";
interface DashboardPage {
    me:User
}
const DashboardPage:NextPage = ({me}:DashboardPage) => {
    return (
        <main className={'p-10'}>
        <h1>Dashboard Page</h1>
        <p>{me.email}</p>
        <p>{me.fullName}</p>
        <Button onClick={logout}>
            Выйти
        </Button>
    </main>)
}

export const getStaticProps: GetStaticProps = async ( ctx ) => {
    const accessToken =  getCookie('accessToken', { req: ctx.req, res: ctx.res });

    axios.defaults.headers.Authorization = `Bearer ${accessToken}`
    try {
        const me = await profile();

        return {
            props: {
                me
            },
        };
    }catch {
        return {
            redirect: {
                destination:'/dashboard/auth',
                permanent:false
            },
        };
    }
};


export default DashboardPage
