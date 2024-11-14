interface RadioOption {
    value: string;
    label: string;
}
interface RadioGroupProps {
   
    name: string;
    options: RadioOption[];
}

export default function RadioGroup({  name, options }: RadioGroupProps) {
    return (
        <div className="flex flex-col gap-2">
           
            <div className="flex gap-4">
                {options.map((option, index) => (
                    <label key={index} className="flex items-center">
                        <input type="radio" name={name} value={option.value} className="mr-2" />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
}
