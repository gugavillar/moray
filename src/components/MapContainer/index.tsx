import { LeafletMouseEvent } from 'leaflet'
import {
  MapContainer as ReactMapContainer,
  MapContainerProps as ReactMapContainerProps,
  TileLayer,
} from 'react-leaflet'
import { GeoContainer } from '@/components'

type MapContainerProps = ReactMapContainerProps & {
  onNeighborhoodClick: (e: LeafletMouseEvent) => void
}

export const MapContainer = ({
  onNeighborhoodClick,
  ...props
}: MapContainerProps) => {
  return (
    <ReactMapContainer
      center={[import.meta.env.VITE_MAP_LAT, import.meta.env.VITE_MAP_LNG]}
      zoom={14}
      {...props}
    >
      <TileLayer url={import.meta.env.VITE_MAP_URL} />
      <GeoContainer handleClick={onNeighborhoodClick} />
    </ReactMapContainer>
  )
}
