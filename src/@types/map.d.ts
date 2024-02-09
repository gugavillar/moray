import neighborhoodGeoJSON from '@/assets/data/geometrias_bairros.json'
export type NeighborhoodGeoJSON = typeof neighborhoodGeoJSON & {
  type:
    | 'FeatureCollection'
    | 'Feature'
    | 'Point'
    | 'MultiPoint'
    | 'LineString'
    | 'MultiLineString'
    | 'Polygon'
    | 'MultiPolygon'
    | 'GeometryCollection'
}

export type NeighborhoodFeatureProp =
  (typeof neighborhoodGeoJSON)['features'][number]
