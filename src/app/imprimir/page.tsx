import Button from "@/components/Button"
import InputFile from "@/components/InputFile"
import List from "@/components/List"
export default function Imprimir() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-screen">
            <div className="w-full max-w-md p-6">
                <h1 className="text-2xl font-bold mb-2 text-center">Escolha os ficheiro</h1>
            </div>
            <div className="flex flex-col gap-1 space-y-4 w-full md:w-1/2">
                <InputFile />
                <div className="flex justify-center">
                    <Button texto={"Enviar"} />
                </div>

            </div>
        </div>
    )
}