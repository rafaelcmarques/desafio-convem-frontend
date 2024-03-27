import { useState } from "react";
import { Button } from "@/components/Button";
import { useTransactionContext } from "@/app/context/TransacitonContext";


export function NewTransaction() {
  const [transactionType, setTransactionType] = useState("debit");
  const [amount, setAmount] = useState("");
  const { createTransaction, createRandomTransactions } = useTransactionContext()

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      if(!transactionType) {
        alert('Escolha o tipo de transação')
        return
      }
      if(!amount) {
        alert('Digite o valor da transação')
        return
      }
      if(Number(amount) < 0) {
        alert('O valor da transação nao pode ser menor que 0')
      }

      const response = await createTransaction({ amount:Number(amount), type: transactionType})
      
      alert('Transação adiconada com sucesso!')
      setAmount('')
      
      console.log('Resposta da requisição:', response);
   
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
    }
  };

  return (

    <div className="bg-teal-800 p-8 rounded-[8px] flex items-center gap-20">
      <div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-white font-medium mr-4 ">
              Escolho o tipo:
            </label>
            <select
              className="bg-gray-100 text-gray-800"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="debit" >Debito</option>
              <option value="credit">Credito</option>
            </select>
          </div>

          <div>
            <label className="text-white font-medium mr-4">
              Valor
            </label>
            <input
              type="number"
              className="text-gray-800"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <Button type="submit">Adicionar Transação</Button>
        </form>
      </div>
      <div>
        <button
          onClick={()=> createRandomTransactions()}
          className="bg-red-900 hover:bg-red-500 disabled:bg-gray-100 px-6 h-12 rounded-2xl 
            font-medium  text-white disabled:text-gray-400 disabled:cursor-not-allowed transition-all 
            border-2 border-dashed border-white">
              Gerar 100 transações
        </button>
      </div>
    </div>
  )
}