import { useMemo } from 'react'
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts'
import populationData from '@/assets/data/populacao_bairros.json'
import { NeighborhoodFeatureProp } from '@/@types/map'
import { ChartLegend } from './ChartLegend'

type ChartProps = {
  properties?: NeighborhoodFeatureProp['properties'] | undefined
}

export const Chart = ({ properties }: ChartProps) => {
  const filterPopulationDataForGeometryId = useMemo(
    () => populationData.filter((data) => data.id_geometria === properties?.id),
    [properties?.id],
  )

  if (!properties) return null

  return (
    <div className="mt-9 flex h-full flex-col gap-16">
      <ChartLegend {...properties} />
      <ResponsiveContainer width="100%" height="40%">
        <LineChart data={filterPopulationDataForGeometryId}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="ano" />
          <Tooltip />
          <Legend />
          <Line dataKey="populacao" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
