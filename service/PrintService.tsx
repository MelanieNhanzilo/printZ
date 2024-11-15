import axios from "axios";

export const axiosInstance= axios.create({
    baseURL: "http://localhost:8080"
})
export class PrintService{
   

    ListarFiles(){
        return axiosInstance.get("/api/files/list");
    }  

    uploadDocumento(file: File | Blob) {
        const formData = new FormData();
        formData.append('file', file);
    
        return axiosInstance.post("/api/files/upload", formData, {
        });
      }
    
    
}