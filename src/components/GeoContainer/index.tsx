import { useRef, useState } from 'react'
import { GeoJSON } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

import { NeighborhoodGeoJSON, NeighborhoodFeatureProp } from '@/@types/map'
import { Drawer, DrawerRef } from '@/components'

import neighborhoodGeoJSON from '@/assets/data/geometrias_bairros.json'
import { Chart } from '../Chart'

const style = () => ({
  color: '#d62728',
})

export const GeoContainer = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<
    NeighborhoodFeatureProp['properties'] | undefined
  >(undefined)
  const drawerRef = useRef<DrawerRef>(null)

  const handleClick = (e: LeafletMouseEvent) => {
    drawerRef.current?.open()
    setSelectedNeighborhood(e.target.feature.properties)
  }

  return (
    <>
      <GeoJSON
        data={neighborhoodGeoJSON as NeighborhoodGeoJSON}
        style={style}
        onEachFeature={(feature, layer) => {
          layer
            .on({
              click: handleClick,
            })
            .bindTooltip(feature.properties.name)
        }}
      />
      <Drawer drawerRef={drawerRef}>
        <Chart properties={selectedNeighborhood} />
      </Drawer>
    </>
  )
}
