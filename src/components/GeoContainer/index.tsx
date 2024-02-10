import { useRef, useState } from 'react'
import { GeoJSON } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

import { NeighborhoodGeoJSON, NeighborhoodFeatureProp } from '@/@types/map'
import { Drawer, DrawerRef } from '@/components'

import neighborhoodGeoJSON from '@/assets/data/geometrias_bairros.json'
import { Chart } from '../Chart'

const neighborhoodColors = ['#E28413', '#003F91', '#A833B9', '#BB0A21']

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
      <Drawer drawerRef={drawerRef}>
        <Chart properties={selectedNeighborhood} />
      </Drawer>
    </>
  )
}
