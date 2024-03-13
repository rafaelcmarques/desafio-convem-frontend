import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../../components/DropdownMenu";
import { Expense } from "../../../../../components/icons/categories/expense/Expense";
import { Income } from "../../../../../components/icons/categories/income/Income";
import { TransactionsIcon } from "@/components/icons/TransactionsIcon";

export function Fab() {
  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div>
          <button
            className="text-white 
             bg-teal-900 rounded-md flex items-center justify-center p-4 gap-2 ">
            <PlusIcon className="w-6 h-6" />
            Nova transação
          </button>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item className="gap-2">
            <Expense/>
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <Income/>
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <TransactionsIcon/>
            Gerar 100 registros aleatórios
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>

  )
}