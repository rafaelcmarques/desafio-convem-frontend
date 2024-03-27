import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '../utils/cn'

function DropdownMenuRoot({children}: {children: React.ReactNode}) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  )
}

function DropdownMenuTrigger({children}: {children: React.ReactNode}) {
  return (
    <RdxDropdownMenu.Trigger className='outline-none' asChild>
      {children}
    </RdxDropdownMenu.Trigger>
  )
}

interface DropdownMenuContentProps {
  children: React.ReactNode,
  className?: string
}

function DropdownMenuContent({children, className}: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content 
        className={cn(
          'bg-white rounded-2xl p-2 space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          'data-[side=bottom]:animate-slide-up-and-fade z-50',
          'data-[side=top]:animate-slide-down-and-fade z-50',
          className
        )}>
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}

interface DropdownMenuItemsProps {
  children: React.ReactNode,
  className?: string,
  onSelect?(): void
}

function DropdownMenuItem({children, className}: DropdownMenuItemsProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={() => alert('cliquei!')} 
      className={cn(
        'outline-none min-h-[40px] flex items-center py-2 px-4 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xltransition-colors cursor-pointer',
        className,
    )}>
      {children}
    </RdxDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem
}