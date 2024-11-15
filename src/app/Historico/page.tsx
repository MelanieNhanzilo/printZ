'use client';

import { useState } from "react";
import { UsuarioService } from "../../../service/UsuarioService";
import Button from "@/components/Button";

const usuarioService = new UsuarioService();

export default function Historico() {
    const [userId, setUserId] = useState<string>("");  
    const [user, setUser] = useState<any | null>(null);   
    const [error, setError] = useState<string | null>(null);  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userId.trim()) {
            usuarioService.listarPorId(parseInt(userId))
                .then((response) => {
                    setUser(response.data);
                    setError(null);
                })
                .catch((error) => {
                    console.error("Erro ao listar usuário:", error);
                    setError("Usuário não encontrado.");
                    setUser(null);
                });
        } else {
            setError("Por favor, insira um ID válido.");
        }
    };

    return (
        <div className="flex flex-row justify-center items-start min-h-screen p-6 bg-gray-100 gap-8">
           
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Buscar Usuário</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input
                        type="number"
                        placeholder="Digite o ID do usuário"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="py-2 px-4 border border-gray-300 rounded-md"
                    />
                    <Button texto={"Buscar"} />
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>

         
            <div>
                {user ? (
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Nome</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Créditos</th>
                                <th className="py-3 px-6 text-left">Impressões</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            <tr className="border-b border-gray-300 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">{user.id}</td>
                                <td className="py-3 px-6 text-left">{user.name}</td>
                                <td className="py-3 px-6 text-left">{user.email}</td>
                                <td className="py-3 px-6 text-left">{user.credits}</td>
                                <td className="py-3 px-6 text-left">
                                    {user.impressoes?.length > 0 ? (
                                        <ul>
                                            {user.impressoes.map((imp: any, index: number) => (
                                                <li key={imp.id}>
                                                    <a href={imp.fileDownloadUri} target="_blank" rel="noopener noreferrer">
                                                        Impressão {index + 1}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span>Sem impressões</span>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-700">Nenhum dado do usuário carregado.</p>
                )}
            </div>
        </div>
    );
}
