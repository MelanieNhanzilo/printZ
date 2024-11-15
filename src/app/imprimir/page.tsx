// src/pages/imprimir.tsx

'use client'

import Button from "@/components/Button";
import InputFile from "@/components/InputFile";
import { useEffect, useState } from "react";
import { PrintService } from "../../../service/PrintService";
import Input from "@/components/Input";

// Instanciando o serviço de impressão
const printService = new PrintService();

export default function Imprimir() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [credits, setCredits] = useState<string>("");  
  const [userId, setUserId] = useState<string>("12");

  useEffect(() => {

    printService.ListarFiles()
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error("Erro ao listar arquivos:", error);
      });
  }, []);


  const handleSubmit = async () => {
    if (selectedFile) {
      try {
        setUploading(true);
        setError(null);

      
        if (selectedFile.type !== "application/pdf") {
          setError("Somente arquivos PDF são permitidos.");
          return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("credits", credits);  

        const response = await printService.uploadDocumento(formData, userId);
        console.log("Arquivo enviado com sucesso:", response.data);

      } catch (err: any) {
        console.error("Erro ao enviar o arquivo:", err);
        setError(err.message);  
      } finally {
        setUploading(false);
      }
    } else {
      setError("Selecione um arquivo PDF.");
    }
  };


  const handleFileChange = (file: File | null) => {
    if (file) {
      setSelectedFile(file);
      setError(null);  
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 space-y-6 gap-6">
        <h1 className="text-2xl font-bold text-center">Escolha um Arquivo para Upload</h1>

        
        <InputFile 
          onChange={handleFileChange}  
          label="Clique aqui para selecionar um arquivo"
        />

     
        <Input
          placeholder="Créditos"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
        />
       
        
        {selectedFile && (
          <div className="mt-4">
            <p>Arquivo selecionado: {selectedFile.name}</p>
          </div>
        )}
        
       
        {error && (
          <div className="text-red-500 mt-2">
            <p>{error}</p>
          </div>
        )}
        <Button onClick={handleSubmit} texto={uploading ? "Enviando..." : "Enviar"} />
        <Button onClick={() => window.location.href = "/menu"} texto="Voltar" />
      </div>
    </div>
  );
}
