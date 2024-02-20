import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type DrawerRef = {
  open: () => void
  close: () => void
}

type DrawerContainer = {
  children: ReactNode
  toggle: () => void
  isOpen: boolean
}

export const Drawer = ({ children, toggle, isOpen }: DrawerContainer) => {
  const classDrawer = isOpen ? '-translate-x-0' : '-translate-x-full'
  return (
    <div
      data-testid="drawer"
      className={twMerge(
        'fixed top-[138px] z-[9999] h-[calc(100%-138px)] w-3/4 rounded-br-3xl rounded-tr-3xl bg-slate-50 px-8 pb-2 pt-12 shadow-lg duration-500 ease-in-out md:w-2/5 lg:w-1/4',
        classDrawer,
      )}
    >
      <button
        className="absolute right-4 top-4 p-2 text-3xl text-slate-500 transition-colors hover:text-slate-700 md:right-9"
        onClick={toggle}
      >
        X
      </button>
      {children}
    </div>
  )
}
