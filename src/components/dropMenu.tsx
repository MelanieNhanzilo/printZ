// components/Dropmenu.tsx
interface DropmenuOption {
    value: string;
    label: string;
}

interface DropmenuProps {
    title: string;
    options: DropmenuOption[];
}

export default function Dropmenu({ title, options }: DropmenuProps) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">{title}</h3>
            <select className="border rounded p-2 w-40">
                <option value="">Escolha</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
