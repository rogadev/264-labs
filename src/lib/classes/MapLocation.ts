import type { LatLngExpression } from 'leaflet'

export default class MapLocation {
  private lat: number
  private lng: number
  constructor(location: [number, number]) {
    this.lat = lat
    this.lng = lng
  }
  getLocation(): LatLngExpression {
    return [this.lat, this.lng]
  }
  setLocation(location: [number, number]) {
    this.lat = lat
    this.lng = lng
  }
  setLocation(lat: number, lng: number) {
    this.lat = lat
    this.lng = lng
  }
  setLeafletLocation(location: LatLngExpression) {
    this.lat = lat
    this.lng = lng
  }
}
