import axios from "axios";

export const axiosInstance= axios.create({
    baseURL: "http://localhost:8080"
})

export class UsuarioService{
   
    listarTodos(){
        return axiosInstance.get("/api/users");
    }  
    
    criarConta(userData: { name: string, email: string, password: string, credits: number }) {
        return axiosInstance.post("/api/users", userData);  
    }

    Login(userData: { email: string,  password: string }) {
        return axiosInstance.post("/api/users/login", userData);  
    }
}

