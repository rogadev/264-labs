import Pokemon from './Pokemon'
import MapLocation from './MapLocation'

export default class Trainer {
  name: string
  location: MapLocation
  icon: {
    iconUrl: 'https://play.pokemonshowdown.com/sprites/trainers/ash-kalos.png'
    iconSize: [50, 50]
    iconAnchor: [25, 25]
  }
  pokemon: Pokemon[]
  constructor(name: string = 'Roga') {
    this.name = name
  }
}
