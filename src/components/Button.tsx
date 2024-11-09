
type BotaoProps = {
    texto: string
    onClick?: any
}

export default function Button({texto, onClick}: BotaoProps){
    return (
        <button className='w-full h-14 rounded-md bg-blue-800 border px-4 text-white text-sm border-none' onClick={onClick}>
           {texto}    
        </button>
    )
}