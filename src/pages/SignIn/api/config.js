import { api } from "../../SignUp/apiForProject/config";
export const signIn = (cred) => api.post(`/auth/signIn`, cred);
