import type { Map } from 'leaflet'
import Trainer from '$lib/classes/Trainer'
import Weather from '$lib/classes.Weather'
import MapNode from '$lib/classes/MapNode'
import seedNodes from '$lib/data/nodes.json'

export default class World {
  private instantiated: boolean = false
  static trainer: Trainer
  static weather: Weather
  static map: Map
  static nodes: MapNode[]
  constructor(map: Map) {
    if (this.instantiated) return
    this.instantiated = true
    this.trainer = new Trainer()
    this.weather = new Weather()
    this.map = map
    this.nodes = []
    seedNodes.forEach((seedLocation) => {
      this.nodes.push(new MapNode(seedLocation))
    })
  }
}
