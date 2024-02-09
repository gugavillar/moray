import { useState, useRef, useImperativeHandle, Ref } from 'react'
import { DrawerRef } from '.'

type UseDrawerArgs = {
  drawerRef: Ref<DrawerRef>
}

export const useDrawer = ({ drawerRef }: UseDrawerArgs) => {
  const [isOpen, setIsOpen] = useState(false)
  const divRef = useRef(null)

  const classDrawer = isOpen ? '-translate-x-0' : '-translate-x-full'

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  useImperativeHandle(
    drawerRef,
    () => {
      return {
        open: handleOpen,
        close: handleClose,
      }
    },
    [],
  )

  return { classDrawer, divRef, handleClose, handleOpen, isOpen }
}
