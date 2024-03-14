
import Image from "next/image";
import { Spinner } from "@/components/Spinner";
import emptyStateImage from "@/assets/EmptyState.svg"
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionCard } from "@/components/TransactionCard";
import { TransactionsIcon } from "@/components/icons/TransactionsIcon";
import { useTransactionsController } from "./useTransactionsController";
import { Modal } from "@/components/Modal";


export async function Transactions() {
  const { 
    isInitialLoading, 
    hasTransaction, 
    isLoading,
    fetchTransactions
  } = await useTransactionsController()



  const {data} = await fetchTransactions() 

  return (
    <div className="bg-gray-100 rounded-2xl sm:h-full lg:max-h-[650px] px-4 py-8 md:p-10  flex flex-col">
    
      {
        isInitialLoading &&
        <div className="h-full w-full flex items-center justify-center">
          <Spinner className="text-teal-900 w-10 h-10" />
        </div>
      }

      {
        !isInitialLoading &&
        <>
          <header className="">
            <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <TransactionsIcon />
              <span className="text-sm text-gray-800 tracking[-0.5px] font-medium">Transações</span>
              <ChevronDownIcon className="text-gray900" />
            </div>
                
            </div>

            <div className="mt-6 relative">

            </div>
          </header>

          <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
            
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <Spinner className="w-10 h-10" />
              </div>
            )}

            {(!hasTransaction && !isLoading) && (
              <div className="flex flex-col items-center justify-center h-full">
                <Image src={emptyStateImage} alt="mulher com uma lupa em mãos"/> 
                <p className="font-normal text-center text-gray-700 ">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

            {(hasTransaction && !isLoading) && (
              <>
                {  data.map(item => <TransactionCard amount={Number(item.amount)} type={item.type}/>)}
              </>
              )
            }

          </div>

        </>
      }

     

    </div>
  )
}