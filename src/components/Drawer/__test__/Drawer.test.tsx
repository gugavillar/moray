import { Ref, createRef } from 'react'
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'

import { Drawer, DrawerRef } from '..'

describe('Drawer component', () => {
  const drawerRef: Ref<DrawerRef> = createRef()

  it('Should drawer render correctly children', () => {
    render(<Drawer drawerRef={drawerRef}>teste</Drawer>)
    const drawerComponent = screen.getByTestId('drawer')
    expect(drawerComponent).toHaveTextContent('teste')
  })

  it('Should drawer have "-translate-x-full" in class when render', () => {
    render(<Drawer drawerRef={drawerRef}>teste</Drawer>)
    const drawerComponent = screen.getByTestId('drawer')
    expect(drawerComponent).toHaveClass('-translate-x-full')
  })
})
