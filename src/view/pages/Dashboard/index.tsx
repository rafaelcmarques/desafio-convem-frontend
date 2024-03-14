'use client'
import { NewTransaction } from "./components/NewTransaction/NewTransaction";
import { Transactions } from "./components/Transactions";

export function Dashboard() {
  return (
  
      <div className=" h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
        <header className="h-12 flex items-center justify-between">
          <h1 className=" text-2xl font-semibold text-teal-900"> Desafio Convem </h1>
        </header>

        <main className="flex-1 flex-row gap-4 max-h-full">
          <div> 
          <div className="mb-6">
            <NewTransaction/>
          </div>
            <Transactions/>
          </div>
        </main>
      </div>
  
   
  )
}