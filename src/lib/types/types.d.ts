interface NPC {
  name: string
  phrases: string[]
}

interface MapObject {
  id: unique symbol
  lat: number
  lng: number
  image: string
}

interface Pokemon {
  name: string
  type: string
  size: number
  hp: number
  normalAttack: Attack
  specialAttack: Attack
  attack(target: Pokemon): number
  special(target: Pokemon): number
  faint()
}

interface Attack {
  name: string
  power: number
  min: number
  max: number
  type: string
}

interface Trainer {
  name: string
  pokemon: Pokemon[]
}

/**
 * 'Raining' | 'Sunny' | 'Snowing' | 'Foggy' | 'Windy'
 */
interface Weather {
  name: 'Sunny' | 'Raining' | 'Snowing' | 'Foggy' | 'Windy'
}

interface MapNode {
  radius: number
  id: string
  location: [number, number]
  diameter: number
}
