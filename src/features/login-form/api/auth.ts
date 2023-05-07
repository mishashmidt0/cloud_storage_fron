import { LoginFormDTO, LoginResponseDTO } from "@/features/login-form/api/dto/auth.dto";
import axios from "@/shared/core/axios";

export const login = async (values:LoginFormDTO): Promise<LoginResponseDTO> => {
    return (await  axios.post('auth/login', values)).data
}
