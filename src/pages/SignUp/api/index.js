import { api } from "../apiForProject/config";

export const signUp = (singUpInfo) => api.post(`/auth/signup`, singUpInfo);
