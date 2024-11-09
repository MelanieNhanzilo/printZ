'use client'
import Button from "@/components/Button";
import Input from "@/components/Input";
import Paragrafo from "@/components/Paragrafo";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const menu = () => {
    router.push('/menu')
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-2 text-center">Iniciar Sessão</h1>
        <Paragrafo texto1={"Nao possui uma conta?"} link={"Criar Conta"} url="criar-conta" />
      </div>
      <div className="flex flex-col gap-1 space-y-4 md:w-1/2">
        <Input placeholder="username" />
        <Input placeholder="palavra passe" />
        <div className="flex justify-center">
          <Button texto={"Entrar"} onClick={menu}/>
        </div>
        <Paragrafo texto1={"Ao prosseguir, voce automaticamente concorda com os "} link={"termos e politicas de privacidade"} url="#" />
      </div>
    </div>
  );
}