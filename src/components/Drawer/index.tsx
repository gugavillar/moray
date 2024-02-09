import { Ref, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { useDrawer } from './useDrawer'
import { useClickOutside } from '@/hooks'

export type DrawerRef = {
  open: () => void
  close: () => void
}

type DrawerContainer = {
  drawerRef: Ref<DrawerRef>
  children: ReactNode
}

export const Drawer = ({ drawerRef, children }: DrawerContainer) => {
  const { classDrawer, divRef, handleClose, isOpen } = useDrawer({ drawerRef })
  useClickOutside({ isOpen, toggle: handleClose, containerRef: divRef })

  return (
    <div
      ref={divRef}
      className={twMerge(
        'fixed top-[138px] z-[9999] h-[calc(100%-138px)] w-3/4 rounded-br-3xl rounded-tr-3xl bg-slate-50 px-8 pb-2 pt-12 shadow-lg duration-500 ease-in-out md:w-2/5 lg:w-1/4',
        classDrawer,
      )}
    >
      <button
        className="absolute right-4 top-4 p-2 text-3xl text-slate-500 transition-colors hover:text-slate-700 md:right-9"
        onClick={handleClose}
      >
        X
      </button>
      {children}
    </div>
  )
}
