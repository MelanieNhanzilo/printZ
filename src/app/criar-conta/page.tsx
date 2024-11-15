'use client'

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Paragrafo from "@/components/Paragrafo";
import { SetStateAction, useEffect, useState } from "react";
import { UsuarioService } from "../../../service/UsuarioService";

//construtor
const usuarioService = new UsuarioService();

export default function CriarConta() {

    useEffect(()=>{
        usuarioService.listarTodos()
           .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error("Erro ao listar usuários:", error);
        });

    },[]);
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [credits, setCredits] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const SalvarConta = async () => {
        setSubmitted(true);
        if (!name || !email || !password || !credits) {
            setSubmitted(false);
            return;
        }
        const creditsNumber = Number(credits);
        if (isNaN(creditsNumber)) {
            setSubmitted(false);
            return;
        }
        try {
            await usuarioService.criarConta({ name, email, password, credits: creditsNumber });
            setSubmitted(false);
            router.push('/'); 
        } catch (error) {
            console.error("Erro ao criar conta:", error);
            setSubmitted(false);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
            <div className="w-full max-w-md p-6">
                <h1 className="text-2xl font-semibold mb-2 text-center">Criar Conta</h1>
                <Paragrafo texto1={"Possui uma conta?"} link={"login"} url="/" />
            </div>
            <div className="flex flex-col gap-1 space-y-4 md:w-1/2">
                <Input
                    placeholder="Nome"
                    type="text"
                    value={name}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)}
                />
                <Input
                    placeholder="Palavra passe"
                    type="password"
                    value={password}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
                />
                <Input
                    placeholder="Créditos"
                    value={credits}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCredits(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                />
                <div className="flex justify-center">
                    <Button texto={"Continuar"} onClick={SalvarConta} />
                </div>
                <Paragrafo texto1={"Ao prosseguir"} link={"termos e politicas de privacidade"} url="#" />
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
}
