// components/CheckboxGroup.tsx
interface CheckboxOption {
    name: string;
    label: string;
}

interface CheckboxGroupProps {
    options: CheckboxOption[];
}

export default function CheckboxGroup({  options }: CheckboxGroupProps) {
    return (
        <div className="flex flex-col gap-2">
            
            <div className="flex gap-4">
                {options.map((option, index) => (
                    <label key={index} className="flex items-center">
                        <input type="checkbox" name={option.name} className="mr-2" />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
}
