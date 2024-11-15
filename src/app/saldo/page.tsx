'use client';

import { useEffect, useState } from 'react';
import { UsuarioService } from '../../../service/UsuarioService'; 
const usuarioService = new UsuarioService();

export default function Saldo() {
  const [credits, setCredits] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const userId = 13; 

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const response = await usuarioService.listarPorId(userId);
        console.log('Resposta completa da API:', response.data); 

        if (response.data && typeof response.data.credits === 'number') {
          setCredits(response.data.credits);
        } else {
          setError('Créditos não encontrados na resposta.');
        }
      } catch (err) {
        setError('Erro ao carregar créditos.');
        console.error('Erro ao buscar créditos:', err);
      }
    };

    fetchSaldo();
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-2 text-center">Créditos</h1>
      </div>
      {credits !== null ? (
        <div className="flex items-center justify-center border border-black rounded-full size-60 mt-20">
          <p className="text-5xl">{credits.toFixed(2)} <span className="font-normal text-lg">.MT</span></p>
        </div>
      ) : (
        <div className="text-center text-red-500 mt-10">
          <p>{error || 'Carregando créditos...'}</p>
        </div>
      )}
    </div>
  );
}
