import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDrawer } from '../useDrawer'

describe('hook useDrawer', () => {
  it('Should initialize with isOpen as false', () => {
    const { result } = renderHook(() => useDrawer({ drawerRef: null }))
    expect(result.current.isOpen).toBeFalsy()
  })

  it('Should set isOpen to true when handleOpen is called', () => {
    const { result } = renderHook(() => useDrawer({ drawerRef: null }))
    act(() => {
      result.current.handleOpen()
    })
    expect(result.current.isOpen).toBeTruthy()
  })

  it('Should set isOpen to false when handleClose is called', () => {
    const { result } = renderHook(() => useDrawer({ drawerRef: null }))
    act(() => {
      result.current.handleOpen()
    })
    expect(result.current.isOpen).toBeTruthy()
    act(() => {
      result.current.handleClose()
    })
    expect(result.current.isOpen).toBeFalsy()
  })

  it('Should set classDrawer to "-translate-x-0" when isOpen is true', () => {
    const { result } = renderHook(() => useDrawer({ drawerRef: null }))
    act(() => {
      result.current.handleOpen()
    })
    expect(result.current.isOpen).toBeTruthy()
    expect(result.current.classDrawer).toBe('-translate-x-0')
  })

  it('Should set classDrawer to "-translate-x-full" when isOpen is false', () => {
    const { result } = renderHook(() => useDrawer({ drawerRef: null }))
    act(() => {
      result.current.handleClose()
    })
    expect(result.current.isOpen).toBeFalsy()
    expect(result.current.classDrawer).toBe('-translate-x-full')
  })
})
