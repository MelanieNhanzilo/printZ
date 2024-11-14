import Button from "@/components/Button";
import InputFile from "@/components/InputFile";
import RadioGroup from "@/components/checkBox"
import CheckboxGroup from "@/components/radioButton";
import Dropmenu from "@/components/dropMenu";

export default function Imprimir() {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen p-4 w-full">
            <div className="flex flex-col gap-5 py-5 px-5 items-center justify-center w-1/2">
                <h2 className="text-2xl font-bold mb-2 text-center">Selecione o que pretende</h2>
            <RadioGroup
                    options={[
                        {
                            label: "Encadernacao",
                            name: ""
                        },
                        {
                            label: "Agrafar",
                            name: ""
                        },
                    ]}
                />

                <CheckboxGroup
                    
                    options={[
                        { label: "Encadernacao",value: "" },
                        { label: "Agrafar", value: ""},
                    ]} name={""}                />
                <Dropmenu
                    title="Selecione uma opção"
                    options={[
                        { value: "option1", label: "A4" },
                        { value: "option2", label: "A3" },
                       
                    ]}
                />
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen p-4 w-1/2">
                <div className="w-full max-w-md p-6">
                    <h1 className="text-2xl font-bold mb-2 text-center">Escolha os ficheiros</h1>
                </div>
                <div className="flex flex-col gap-1 space-y-4 w-full md:w-1/2">
                    <InputFile />
                    <div className="flex justify-center">
                        <Button texto={"Enviar"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
