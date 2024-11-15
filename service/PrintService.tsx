// service/PrintService.ts

import axios from "axios";

// Instanciando o axios
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",  
  headers: {
    'Content-Type': 'multipart/form-data',
  },
 
});


export class PrintService {
  
  uploadDocumento(formData: FormData, userId: string) {
    return axiosInstance.post(`/api/users/${userId}/add-print`, formData)
      .then(response => response)
      .catch(error => {
        console.error("Erro ao enviar arquivo:", error);
        if (error.response) {
          throw new Error(`Erro do servidor: ${error.response.data.message || error.response.statusText}`);
        } else if (error.request) {
          throw new Error("Erro de requisição: O servidor não respondeu.");
        } else {
          throw new Error(`Erro desconhecido: ${error.message}`);
        }
      });
  }

 
  ListarFiles() {
    return axiosInstance.get('/api/files')
      .then(response => response)
      .catch(error => {
        console.error("Erro ao listar arquivos:", error);
        throw new Error("Erro ao listar arquivos.");
      });
  }
}
