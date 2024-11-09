interface ParagrafoProps {
    texto1: string
    link: string
    url : string
}

export default function Paragrafo({texto1, link, url}: ParagrafoProps){
    return(
        <p className="text-center mb-1 text-xs">{texto1} <a href={url} className=" text-blue-800 underline"> {link}</a></p>
    )
}