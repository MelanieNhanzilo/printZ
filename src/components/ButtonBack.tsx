import React from 'react';

type BotaoProps = {
    texto: string;
    onClick?: any
}

export default function ButtonBack({texto, onClick}: BotaoProps){
    return (
        <button className='w-full  h-10 sm:h-12 lg:h-14  rounded-md  bg-gray-100 border border-gray-400 px-4 sm:px-5 lg:px-6  text-black text-sm sm:text-base lg:text-lg'>
           {onClick}
           {texto}  

        </button>
    )
}