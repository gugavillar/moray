import { RefObject, useCallback, useEffect } from 'react'

type UseClickOutsideArgs = {
  isOpen: boolean
  handleClose: () => void
  containerRef: RefObject<HTMLDivElement>
}

export const useClickOutside = ({
  isOpen,
  handleClose,
  containerRef,
}: UseClickOutsideArgs) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current?.contains(event.target as Node) &&
        isOpen
      ) {
        handleClose()
      }
    },
    [containerRef, isOpen, handleClose],
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [handleClickOutside, isOpen])
}
