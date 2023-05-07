import {
    RegisterFormDTO,
    RegisterResponseDTO
} from "./dto/register.dto";
import axios from "@/shared/core/axios";

export const register = async (values:RegisterFormDTO): Promise<RegisterResponseDTO> => {
    return (await  axios.post('auth/register', values)).data
}
