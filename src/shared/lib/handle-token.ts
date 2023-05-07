import { deleteCookie } from "cookies-next";

export const handleToken = {
    delete: (options?:any) => {
        deleteCookie('accessToken', options);
    }
}
