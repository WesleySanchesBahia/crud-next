import Cliente from "@/src/core/Cliente";
import ClienteRepositorio from "@/src/core/ClienteRepositorio";
import firebase from "../config";
export default class  ColecaoCliente implements ClienteRepositorio{
    #conversor = {
        toFirestore(cliente:Cliente) {
            return {
                nome: cliente._nome,
                idade: cliente._idade,
            }
        }, 
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente{
            const dados = snapshot?.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }
    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?._id){
           await  this.colecao().doc(cliente._id).set(cliente);
           return cliente;
        } else {
            console.log("Salvar Cliente", cliente);
            const docRef = await this.colecao().add(cliente);
            const snapshot = await docRef.get();
            const doc = snapshot.data();

            if(!doc) throw new Error("Deu ruim aqui!");

            return doc as Cliente;
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente?._id ?? '' ).delete();
    }


    async obterTodos(): Promise<Cliente[]> {
        const query =  await this.colecao().get();
        const teste = query.docs.map((doc:any) => doc.data()) ?? []
        console.log("Dados:"+ JSON.stringify(teste));
        return query.docs.map((doc:any) => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }

}