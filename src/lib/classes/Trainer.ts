import type { Pokemon } from "$lib/types"

class Trainer {
  name: 'Roga',
  location: [0, 0],
  icon: {
    iconUrl: 'https://play.pokemonshowdown.com/sprites/trainers/ash-kalos.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  },
  pokemon: Pokemon[],

  constructor(name: string) {
    this.name = name
  }
}