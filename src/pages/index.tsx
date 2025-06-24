import Layout from "../Components/Layout";
import Tabela from "../Components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
  new Cliente('Wesley', 31, '1'),
  new Cliente('Wesley', 31, '2'),
  new Cliente('Wesley', 31, '3'),
  new Cliente('Wesley', 31, '4')
  ]


  function clienteSelecionado(cliente:Cliente){
    console.log(cliente._nome);
  } 
  function  clienteExcluido(cliente:Cliente){
    console.log(cliente._nome);
  }
  return (
    <div className="flex  h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-amber-50">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}  clienteExcluido={clienteExcluido} ></Tabela>
      </Layout>
    </div>
  );
}
