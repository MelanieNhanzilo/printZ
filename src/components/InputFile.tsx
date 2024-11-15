import React, { useState } from 'react';
interface InputFileProps {
  onChange: (file: File | null) => void;
  label?: string;
}

const InputFile: React.FC<InputFileProps> = ({ onChange, label = "Escolha um arquivo" }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileName(file ? file.name : null);
    onChange(file);
  };

  return (
    <div className=" w-full relative bg-zinc-100 border grid place-content-center h-14 rounded-lg">
      <input
        type="file"
        className="opacity-0 inset-0 w-full h-full absolute"
        onChange={handleFileChange}
        aria-label="Upload de arquivo"
      />
      <span className="text-center text-gray-600">{fileName ? fileName : label}</span>
    </div>
  );
};

export default InputFile;
