import { ReactNode } from 'react'
import {
  MapContainer as ReactMapContainer,
  MapContainerProps as ReactMapContainerProps,
  TileLayer,
} from 'react-leaflet'

type MapContainerProps = ReactMapContainerProps & {
  children: ReactNode
}

export const MapContainer = ({ children, ...props }: MapContainerProps) => {
  return (
    <ReactMapContainer
      center={[import.meta.env.VITE_MAP_LAT, import.meta.env.VITE_MAP_LNG]}
      zoom={14}
      {...props}
    >
      <TileLayer url={import.meta.env.VITE_MAP_URL} />
      {children}
    </ReactMapContainer>
  )
}
