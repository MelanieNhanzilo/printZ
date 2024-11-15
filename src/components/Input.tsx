interface InputProps {
    placeholder: string;
    type?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}
export default function Input({ placeholder, type = "text", value,onChange,name,}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className="w-full h-14 rounded-md bg-gray-100 px-4 md:px-6 placeholder-gray-500 text-xs"
        />
    );
}
