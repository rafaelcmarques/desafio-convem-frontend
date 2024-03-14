import axios from "axios";
  
   export async function useTransactionsController() {
  
    async function fetchTransactions(){
      try {
        const response = await axios.get('http://localhost:3333/transactions');
        return response.data
      } catch (error) {
        console.log('error', error)
      }
    }
    
    
    return {
      hasTransaction: true,
      isInitialLoading: false,
      isLoading: false,
      fetchTransactions
    };
}
