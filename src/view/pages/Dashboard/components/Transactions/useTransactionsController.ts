import axios from "axios";
  
   export  function useTransactionsController() {

    return {
      hasTransaction: true,
      isInitialLoading: false,
      isLoading: false,
      
    };
}
