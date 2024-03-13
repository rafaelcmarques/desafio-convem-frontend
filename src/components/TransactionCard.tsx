import { formatCurrency } from "@/utils/formatCurrency";
import { CategoryIcon } from "./icons/categories/CategoryIcon";
import { cn } from "@/utils/cn";

interface TrasnctionCardProps {
  type: 'credit' | 'debit',
  amount: number
}

export function TransactionCard ({type, amount}: TrasnctionCardProps) {
  return(
    <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
    <div className="flex-1 flex items-center gap-3">
      {type == 'credit' ? <CategoryIcon type="income" /> : <CategoryIcon type="expense" /> }
      <div>
      <span className={cn("font-medium tracking-[-0.5px]", type=='debit'? 'text-red-600' : 'text-green-500' )}>{type}</span>
      </div>
    </div>
      <span className={cn("font-medium tracking-[-0.5px]", type=='debit'? 'text-red-600' : 'text-green-500' )}>
          {type == 'debit' ? <> - </> : <></>}
         {formatCurrency(amount)}
      </span>
  </div>
  )
}