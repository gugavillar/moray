import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from '..'

describe('Header component', () => {
  it('Should Header component render correctly', () => {
    render(<Header />)
    const headerComponent = screen.getByTestId('header')
    expect(headerComponent).toBeInTheDocument()
  })

  it('Should Header component render correctly h1', () => {
    render(<Header />)
    const headerComponent = screen.getByRole('heading', { level: 1 })
    expect(headerComponent).toHaveTextContent('Explore a evolução populacional')
  })

  it('Should Header component render correctly em', () => {
    render(<Header />)
    const headerComponent = screen.getByText('São José dos Campos')
    expect(headerComponent).toBeInTheDocument()
  })

  it('Should Header component render correctly h2', () => {
    render(<Header />)
    const headerComponent = screen.getByRole('heading', { level: 2 })
    expect(headerComponent).toHaveTextContent('clique nos bairros destacados')
  })
})
