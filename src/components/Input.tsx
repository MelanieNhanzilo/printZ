interface InputProps {
    placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
    return (
        <input type="text" placeholder={placeholder} className="w-full h-14 rounded-md bg-gray-100 px-4 md:px-6 placeholder-gray-500 text-xs" />
    );
}