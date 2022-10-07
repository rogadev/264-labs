import generateID from '$lib/generators/generateID'
import MapLocation from './MapLocation'
import Pokemon from './Pokemon'
import Trainer from './Trainer'
import Item from './Item'

export default class MapNode {
  readonly id: unique symbol
  location: MapLocation
  diameter: number
  object: null | Pokemon | Trainer | Item = null

  constructor(location: MapLocation, diameter: number = 8) {
    this.id = generateID()
    this.location = location
    this.diameter = diameter
  }
  setNodeObject(object: Pokemon | Trainer | Item) {
    this.object = object
  }
  removeNodeObject() {
    this.object = null
  }
}
