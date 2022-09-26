import generateID from '$lib/generators/generateID'

class MapNode {
  readonly id: string
  location: MapLocation
  diameter: number

  constructor(location: MapLocation, diameter: number) {
    this.id = generateID()
    this.location = location
    this.diameter = diameter
  }
}

export default MapNode
