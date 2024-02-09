import { NeighborhoodFeatureProp } from '@/@types/map'

type InfoDataProps = Omit<NeighborhoodFeatureProp['properties'], 'id'>

export const ChartLegend = ({ name, setor, zona }: InfoDataProps) => {
  return (
    <div data-testid="chart-legend">
      <h3 className="text-xl font-semibold">Bairro: {name}</h3>
      <p className="text-lg">Setor: {setor}</p>
      <p className="text-lg">Zona: {zona}</p>
    </div>
  )
}
