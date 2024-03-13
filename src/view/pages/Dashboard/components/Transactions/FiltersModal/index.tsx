"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../../components/Modal";
import { Button } from "../../../../../../components/Button";
import { useFiltersModal } from "./useFiltersModal";
import { cn } from "../../../../../../utils/cn";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
}

const mockedAccount = [
  {
    id: '123',
    name: 'Nubank'
  },
  {
    id: '456',
    name: 'Xp Investimentos'
  },
  {
    id: '789',
    name: 'Dinheiro'
  },
]


export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {handleSelectBankAccount, selectedBankAccountId, selectedYear, handleChangeYear} = useFiltersModal()

  return (

    <Modal title="Filtro" open={open} onClose={onClose}>
    
      <div>
        <span className='text-lg font-bold tracking-[-1px] text-gray-800'>
          Conta
        </span>
        <div className="space-y-2 mt-2">
          {
            mockedAccount.map(account => (
              <button 
                key={account.id}
                onClick={()=>handleSelectBankAccount(account.id)}
                className={cn(
                "p-2  rounded-2xl transition-colors w-full text-left text-gray-800",
                account.id === selectedBankAccountId && '!bg-gray-200',               
                )}
              >
                {account.name}
              </button>
            ))
          }
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className='text-lg font-bold tracking-[-1px]'>
          Ano
        </span>

        <div className="mt-2 w-52 flex items-center justify-between ">
          <button
            onClick={()=> handleChangeYear(-1)} 
            className="w-12 h-12 flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">{selectedYear}</span>
          </div>
          <button
          onClick={()=> handleChangeYear(1)} 
          className="w-12 h-12 flex items-center justify-center"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Button className="w-full mt-10">
        Aplicar Filtros
      </Button>

    </Modal>
  )
}