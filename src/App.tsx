import { GeoContainer, MapContainer, Header } from '@/components'

export const App = () => {
  return (
    <>
      <Header />
      <MapContainer className="size-full">
        <GeoContainer />
      </MapContainer>
    </>
  )
}
