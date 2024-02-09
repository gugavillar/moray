import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChartLegend } from '../ChartLegend'

describe('ChartLegend component', () => {
  it('Should ChartLegend component render correctly', () => {
    render(<ChartLegend name="Centro" setor="Centro" zona="Oeste" />)
    const chartLegendComponent = screen.getByTestId('chart-legend')
    expect(chartLegendComponent).toBeInTheDocument()
  })

  it('Should ChartLegend component render correctly h3', () => {
    render(<ChartLegend name="Centro" setor="Centro" zona="Oeste" />)
    const chartLegendHeadingComponent = screen.getByRole('heading', {
      level: 3,
    })
    expect(chartLegendHeadingComponent).toHaveTextContent('Bairro: Centro')
  })

  it('Should ChartLegend component render correctly sector paragraph', () => {
    render(<ChartLegend name="Centro" setor="Centro" zona="Oeste" />)
    const chartLegendHeadingComponent = screen.getByText('Setor: Centro')
    expect(chartLegendHeadingComponent).toBeInTheDocument()
  })

  it('Should ChartLegend component render correctly zone paragraph', () => {
    render(<ChartLegend name="Centro" setor="Centro" zona="Oeste" />)
    const chartLegendHeadingComponent = screen.getByText('Zona: Oeste')
    expect(chartLegendHeadingComponent).toBeInTheDocument()
  })
})
