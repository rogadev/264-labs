import Pokemon from './Pokemon'
import MapLocation from './MapLocation'

export default class Trainer {
  name: string
  location: MapLocation
  icon: {
<<<<<<< Updated upstream
    iconUrl: 'https://play.pokemonshowdown.com/sprites/trainers/ash-kalos.png'
    iconSize: [50, 50]
    iconAnchor: [25, 25]
  }
  pokemon: Pokemon[]
  constructor(name: string = 'Roga') {
=======
    iconUrl: 'https://play.pokemonshowdown.com/sprites/trainers/ash-kalos.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  }
  pokemon: Pokemon[]

  constructor(name: string = "Roga") {
>>>>>>> Stashed changes
    this.name = name
  }
}
