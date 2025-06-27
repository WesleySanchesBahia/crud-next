import Botao from "../Components/Botao";
import Formulario from "../Components/Formulario";
import Layout from "../Components/Layout";
import Tabela from "../Components/Tabela";
import useCliente from "../hooks/useClientes";

export default function Home() {

    const {
      excluirCliente,
      selecionarCliente,
      novoCliente,
      salvarCliente,
      cliente,
      clientes,
      tabelaVisivel,
      exibirTabela
    } = useCliente();

  return (
    <div className="flex  h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-amber-50">
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={() => novoCliente()}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={() =>  exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
