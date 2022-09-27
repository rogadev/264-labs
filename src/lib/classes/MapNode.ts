import generateID from '$lib/generators/generateID'
import { LatLngExpression } from 'leaflet'

class MapNode {
  readonly id: string
  location: LatLngExpression
  diameter: number

  constructor(location: MapLocation, diameter: number) {
    this.id = generateID()
    this.location = location
    this.diameter = diameter
  }
}

export default MapNode
