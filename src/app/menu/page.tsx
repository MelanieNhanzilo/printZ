'use client'
import { useRouter } from "next/navigation"
import Button from "@/components/Button"

export default function PrintZ() {
    const router = useRouter()
    const imprimir = () => {
        router.push('/imprimir')
    }
    const historico = () => {
        router.push('/historico')
    }
    const saldo = () => {
        router.push('/saldo')
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">Print <span className="text-blue-800">Z</span></h1>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
                <Button texto={"Imprimir"} onClick={imprimir}/>
                <Button texto={"Historico"} onClick={historico}/>
                <Button texto={"Saldo"} onClick={saldo}/>
            </div>
        </div>
    )
}