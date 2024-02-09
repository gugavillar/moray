import { describe, it, vi, expect } from 'vitest'

import { renderHook } from '@testing-library/react'
import { useClickOutside } from '../useClickOutside'

describe('hook useClickOutside', () => {
  it('Should call handleClose when clicking outside the containerRef when isOpen true', () => {
    const handleClose = vi.fn()
    const containerRef = { current: document.createElement('div') }

    renderHook(() =>
      useClickOutside({
        isOpen: true,
        handleClose,
        containerRef: containerRef as React.MutableRefObject<HTMLDivElement>,
      }),
    )

    document.dispatchEvent(new MouseEvent('click'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('Should not call handleClose when clicking inside the containerRef when isOpen false', () => {
    const handleClose = vi.fn()
    const containerRef = { current: document.createElement('div') }

    renderHook(() =>
      useClickOutside({
        isOpen: false,
        handleClose,
        containerRef: containerRef as React.MutableRefObject<HTMLDivElement>,
      }),
    )

    document.dispatchEvent(new MouseEvent('click'))
    expect(handleClose).toHaveBeenCalledTimes(0)
  })
})
