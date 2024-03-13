import { useState } from "react";

export function useTransctionsController() {

  return {
    transactions: [1],
    isInitialLoading:false,
    isLoading: false,
   }
  
}