/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_MAP_URL: string
  readonly VITE_MAP_LAT: number
  readonly VITE_MAP_LNG: number
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
