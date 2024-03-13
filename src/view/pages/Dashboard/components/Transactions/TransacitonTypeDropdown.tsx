import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../../components/icons/TransactionsIcon";
import { DropdownMenu } from "../../../../../components/DropdownMenu";
import { IncomeIcon } from "../../../../../components/icons/IncomeIcon";
import { ExpensesIcon } from "../../../../../components/icons/ExpensesIcon";

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
      <button className="flex gap-2 items-center">
          <TransactionsIcon />
          <span className="text-sm text-gray-800 tracking[-0.5px] font-medium">Transações</span>
          <ChevronDownIcon className="text-gray900" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[279px] ">
        <DropdownMenu.Item className="gap-2">
          <IncomeIcon/>
          Receitas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2">
          <ExpensesIcon/>
          Despesas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2">
          <TransactionsIcon/>
          Transações
        </DropdownMenu.Item>

      </DropdownMenu.Content>

    </DropdownMenu.Root>
  )
}