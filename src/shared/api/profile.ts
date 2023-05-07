import { handleToken } from "@/shared/lib/handle-token";
import { User } from "./dto/profile.dto";
import axios from "@/shared/core/axios";

export const profile = async (): Promise<User> => {
    return (await  axios.get('users/me')).data
}
export const logout = async () => {
    handleToken.delete()
}
