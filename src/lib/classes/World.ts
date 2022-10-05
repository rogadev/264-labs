import type { Map } from 'leaflet'
import Trainer from './Trainer'
import Weather from './Weather'

export default class World {
  private instantiated: boolean = false
  static trainer: Trainer
  static weather: Weather
  static map: Map
  constructor(map: Map) {
    if (this.instantiated) return
    this.instantiated = true
    this.trainer = new Trainer()
    this.weather = new Weather()
    this.map = map
  }
}
