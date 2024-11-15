'use client'
import Button from "@/components/Button";
import Input from "@/components/Input";
import Paragrafo from "@/components/Paragrafo";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { UsuarioService } from "../../service/UsuarioService";

const usuarioService = new UsuarioService();
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const LoginUser = async () => {
    if (!email || !password) { 
      setError("Preencha todos os campos");
      return;
    }
    
    setLoading(true);
    setError('');  
    const userData = { email, password };
    
    try {
        const response = await usuarioService.Login(userData);
        
        if (response.data.status) {
            localStorage.setItem('token', response.data.token);
            router.push('/menu');
        } else {
            setError(response.data.message || "Credenciais inválidas.");
        }
    } catch (err) {
        console.error('Erro ao fazer login', err);
        setError('Erro ao tentar fazer login');
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-2 text-center">Iniciar Sessão</h1>
        <Paragrafo texto1={"Nao possui uma conta?"} link={"Criar Conta"} url="criar-conta" />
      </div>
      <div className="flex flex-col gap-1 space-y-4 md:w-1/2">
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Palavra passe"
          type="password"
          value={password}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>} 
        <div className="flex justify-center">
          <Button texto={loading ? "Entrando..." : "Entrar"} onClick={LoginUser} />
        </div>
        <Paragrafo texto1={"Ao prosseguir, você automaticamente concorda com os "} link={"termos e políticas de privacidade"} url="#" />
      </div>
    </div>
  );
}
