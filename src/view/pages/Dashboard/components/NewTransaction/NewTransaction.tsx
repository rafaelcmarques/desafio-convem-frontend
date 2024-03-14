
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/Button";


export function NewTransaction() {
  const [transactionType, setTransactionType] = useState("debit");
  const [amount, setAmount] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault(); 

    console.log(transactionType, amount)

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

      const response = await axios.post('http://localhost:3333/', {
        type: transactionType,
        amount: Number(amount)
      });
      
      alert('Transação adiconada com sucesso!')

      
      console.log('Resposta da requisição:', response.data);
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
      // Trate o erro de acordo com sua lógica de negócio
    }
  };

  return (
    <div className="bg-teal-800 p-8 rounded-[8px]">
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
        <Button type="submit">Adicionar Trasação</Button>
      </form>
    </div>
  )
}