import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?:(cliente:Cliente) => void;
  cancelado?:() => void;
  
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?._id;
  const [nome, setNome] = useState(props.cliente?._nome ?? "");
  const [idade, setIdade] = useState(props.cliente?._idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada label="Nome" 
        type="text" 
        readonly={true} 
        value={id} 
        className="mb-5"
        />
      ) : (
        false
      )}
      <Entrada
        label="Nome"
        type="text"
        readonly={false}
        value={nome}
        onChange={setNome}
        className="mb-5"
      />
      <Entrada
        label="Idade"
        type="number"
        readonly={false}
        value={idade}
        onChange={setIdade}
      />
      <div className="flex justify-end mt-3">
        <Botao cor="blue" className="mr-3" onClick={() => props.clienteMudou?.(new Cliente(nome, Number(idade), id)) } >{id ? 'Alterar':'Salvar'}</Botao>
        <Botao cor="gray" onClick={props.cancelado}>Fechar</Botao>
      </div>

    </div>
  );
}
