'use client'
import { UserMenu } from "../../../components/UserMenu";
import { Fab } from "./components/Fab";
import { Transactions } from "./components/Transactions";

export function Dashboard() {
  return (

    
      <div className=" h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">

        <header className="h-12 flex items-center justify-between">
          <h1 className=" text-2xl font-semibold text-teal-900"> Desafio Convem </h1>
          <UserMenu/>
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">

          <div className="w-full"> 
            <Transactions/>
          </div>
          
          <Fab/>
  
        </main>

      </div>
   
  )
}