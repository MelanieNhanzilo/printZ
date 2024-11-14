'use client'
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Paragrafo from "@/components/Paragrafo";

export default function CriarConta() {
    const router = useRouter()
    const login = () => {
        router.push('/')
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
            <div className="w-full max-w-md p-6">
                <h1 className="text-2xl font-semibold mb-2 text-center">Criar Conta</h1>
                <Paragrafo texto1={"Possui uma conta?"} link={"login"} url="/" />
            </div>
            <div className="flex flex-col gap-1 space-y-4 md:w-1/2">
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="palavra passe" />
                <Input placeholder="confirmar palavra passe" />
                <div className="flex justify-center">
                    <Button texto={"Continuar"} onClick={login} />
                </div>
                <Paragrafo texto1={"Ao prosseguir"} link={"termos e politicas de privacidade"} url="#" />
            </div>
        </div>
    );
}