import Image from "next/image";
import { Spinner } from "@/components/Spinner";
import emptyStateImage from "@/assets/EmptyState.svg"
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionCard } from "@/components/TransactionCard";
import { TransactionsIcon } from "@/components/icons/TransactionsIcon";
import { useTransactionContext } from "@/app/context/TransacitonContext";
import { useEffect, useState } from "react";

export function Transactions() {
  
  const { fetchAllTrasactions, transactions, transaction } = useTransactionContext();
  const [hasTransaction, setHasTransaction] = useState(true);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
         await fetchAllTrasactions();
      } catch (err) {
        console.log(err);
      } 
    };
     fetchData();
  }, [transaction]); 

  useEffect(() => {
    if (transactions.length > 0) {
      setHasTransaction(true);
    } else {
      setHasTransaction(false);
    }
  }, [transactions, transaction]);
 
  return (
    <div className="bg-gray-100 rounded-2xl sm:h-full lg:max-h-[650px] px-4 py-8 md:p-10  flex flex-col">
    

      {
       
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
            

            {!hasTransaction  && (
              <div className="flex flex-col items-center justify-center h-full">
                <Image src={emptyStateImage} alt="mulher com uma lupa em mãos"/> 
                <p className="font-normal text-center text-gray-700 ">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

            {(hasTransaction) && (
              <>
                { transactions && transactions.map(item => <TransactionCard amount={Number(item.amount)} type={item.type} key={item.id}/>)}
              </>
              )
            }

          </div>

        </>
      }

    </div>
  )
}
