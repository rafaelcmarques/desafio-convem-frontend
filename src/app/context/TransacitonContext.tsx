
import axios from 'axios'
import { faker } from '@faker-js/faker'; 
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'

interface CreateTransactionParams {
  type: string,
  amount: number
}

interface TransactionContextType {
  transaction: any;
  transactions: any[];
  setTransactions: any;
  createTransaction: (transaction: CreateTransactionParams) => Promise<void>;
  fetchAllTrasactions: () => Promise<any>
  createRandomTransactions: () => Promise<any>
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [transaction, setTransaction] = useState({});
  const [transactions, setTransactions] = useState([]);

  const createTransaction = async (transactionData: CreateTransactionParams) => {
    try {
      const response = await axios.post('http://localhost:3333/', transactionData);
      console.log(response.data)
      setTransaction(response.data)
      console.log(transaction)
    } catch(err) {
      console.log(err)
    }
  }

  const fetchAllTrasactions = async () => {
    try {
      const response = await axios.get('http://localhost:3333/transactions');
      const { data } = response.data;
      setTransactions(data);

    } catch (error) {
      console.log('error', error)
    }
  }

  const generateRandomTransactionData = () => {
    const types = ['debit', 'credit'];
    const type = types[Math.floor(Math.random() * types.length)]; // Seleciona aleatoriamente um tipo de transação
    const amount = Math.floor(Math.random() * 1000);
    return { type, amount };
  }

  const createRandomTransaction = async () => {
    const transactionData = generateRandomTransactionData(); 
    try {
      const response = await axios.post('http://localhost:3333/', transactionData);
      setTransaction(response.data) 
      console.log('Transação criada:', response.data);
    } catch(err) {
      console.error('Erro ao criar transação:', err);
    }
  }

  const createRandomTransactions = async () => {
    const confirmed = confirm("Deseja criar 100 transações aleatórias?");
    
    if (confirmed) {
      for (let i = 0; i < 100; i++) {
        await createRandomTransaction();
      }
    } else {
      console.log("Operação cancelada pelo usuário.");
    }
  }


  return (
    <TransactionContext.Provider value={{ transaction, transactions, setTransactions, createTransaction, fetchAllTrasactions, 
      createRandomTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}


export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactionContext must be used within a TransactionProvider');
  }
  return context;
}
