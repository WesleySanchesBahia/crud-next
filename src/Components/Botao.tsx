
type CoresPermitadas = 'green' | 'blue' | 'gray'
interface BotaoProps {
    cor?:CoresPermitadas
    className?:string
    children:any,
    onClick?:() => void;
}

const cores:Record<CoresPermitadas, string> ={
    green: "from-green-400 to-green-700",
    blue: "from-blue-400 to-blue-700",
    gray: "from-gray-400 to-gray-700"
}

export default function Botao(props:BotaoProps){
    const cor  = props.cor ?? 'gray'
    return(
        <>
            <button className={`
                bg-gradient-to-r ${cores[cor]}
                text-white
                px-4
                py-2
                rounded-md
                cursor-pointer
                ${props.className}
                
                `} onClick={props.onClick}>
                {props.children}
            </button>
        </>
    )
}