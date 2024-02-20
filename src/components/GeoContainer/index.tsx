import { GeoJSON } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

import { NeighborhoodGeoJSON } from '@/@types/map'

import neighborhoodGeoJSON from '@/assets/data/geometrias_bairros.json'

const neighborhoodColors = ['#E28413', '#003F91', '#A833B9', '#BB0A21']

type GeoContainerProps = {
  handleClick: (e: LeafletMouseEvent) => void
}

export const GeoContainer = ({ handleClick }: GeoContainerProps) => {
  return (
    <GeoJSON
      data={neighborhoodGeoJSON as NeighborhoodGeoJSON}
      style={(feature) => ({
        color: neighborhoodColors[feature?.properties.id - 1],
      })}
      onEachFeature={(feature, layer) => {
        layer
          .on({
            click: handleClick,
          })
          .bindTooltip(feature.properties.name)
      }}
    />
  )
}
