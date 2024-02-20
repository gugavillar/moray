import { MapContainer, Header, Drawer } from '@/components'
import { Chart } from './components/Chart'
import { useState } from 'react'
import { LeafletMouseEvent } from 'leaflet'
import { NeighborhoodFeatureProp } from './@types/map'

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<
    NeighborhoodFeatureProp['properties'] | undefined
  >(undefined)

  const toggle = () => setIsOpen((prevState) => !prevState)

  const handleClick = (e: LeafletMouseEvent) => {
    toggle()
    setSelectedNeighborhood(e.target.feature.properties)
  }

  return (
    <>
      <Header />
      <MapContainer className="size-full" onNeighborhoodClick={handleClick} />
      <Drawer toggle={toggle} isOpen={isOpen}>
        <Chart properties={selectedNeighborhood} />
      </Drawer>
    </>
  )
}
