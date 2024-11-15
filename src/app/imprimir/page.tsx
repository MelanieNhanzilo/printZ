'use client'

import Button from "@/components/Button";
import InputFile from "@/components/InputFile";
import { useEffect, useState } from "react";
import { PrintService } from "../../../service/PrintService";
const printService=new PrintService();

export default function Imprimir() {

    useEffect(()=>{
        printService.ListarFiles()
           .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error("Erro ao listar files:", error);
        });

    },[]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false); 
  const [error, setError] = useState<string | null>(null); 

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };
  const handleSubmit = async () => {
    if (selectedFile) {
      try {
        setUploading(true);
        setError(null); 

        const printService = new PrintService();
        const response = await printService.uploadDocumento(selectedFile); 

        console.log("Arquivo enviado com sucesso:", response.data);

      } catch (err) {
        console.error("Erro ao enviar o arquivo:", err);
        setError("Erro ao enviar arquivo.");
      } finally {
        setUploading(false);
      }
    } else {
      console.log("Selecione um ficheiro")
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
        <Button  onClick={"/menu"}texto={"Voltar"}/> 
      </div>
    </div>
  );
}
