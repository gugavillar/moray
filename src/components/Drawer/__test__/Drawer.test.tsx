import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'

import { Drawer } from '..'

describe('Drawer component', () => {
  const isOpen = false
  const toggle = () => !isOpen

  it('Should drawer render correctly children', () => {
    render(
      <Drawer isOpen={isOpen} toggle={toggle}>
        teste
      </Drawer>,
    )
    const drawerComponent = screen.getByTestId('drawer')
    expect(drawerComponent).toHaveTextContent('teste')
  })

  it('Should drawer have "-translate-x-full" in class when render', () => {
    render(
      <Drawer isOpen={isOpen} toggle={toggle}>
        teste
      </Drawer>,
    )
    const drawerComponent = screen.getByTestId('drawer')
    expect(drawerComponent).toHaveClass('-translate-x-full')
  })

  it('Should drawer have "-translate-x-0" in class when isOpen true', () => {
    render(
      <Drawer isOpen={true} toggle={toggle}>
        teste
      </Drawer>,
    )
    const drawerComponent = screen.getByTestId('drawer')
    expect(drawerComponent).toHaveClass('-translate-x-0')
  })
})
