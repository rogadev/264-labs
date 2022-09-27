import { LatLngExpression } from 'leaflet'
/**
 * 'Raining' | 'Sunny' | 'Snowing' | 'Foggy' | 'Windy'
 */
interface Weather {
  name: 'Sunny' | 'Raining' | 'Snowing' | 'Foggy' | 'Windy'
}

interface MapNode {
  id: string
  location: LatLngExpression
  diameter: number
}
