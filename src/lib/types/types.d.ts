export interface Person {
  id: unique symbol
  name: string
}

export interface NPC extends Person {
  phrases: string[]
}

export interface MapObject {
  id: unique symbol
  location: Location
  image: string
}

export interface Pokemon {
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

export interface Attack {
  name: string
  power: number
  min: number
  max: number
  type: string
}

/**
 * 'Raining' | 'Sunny' | 'Snowing' | 'Foggy' | 'Windy'
 */
export type Weather =
  | 'Sunny'
  | 'Raining'
  | 'Snowing'
  | 'Foggy'
  | 'Windy'
  | 'Cloudy'

export type NodeType = 'pokemon' | 'trainer' | 'npc' | 'item' | 'gym' | 'shop'

export interface MapNode {
  radius: number
  id: string
  location: [number, number]
  diameter: number
}

export interface Trainer {
  name: string
  location: [number, number]
  icon: {
    iconUrl: string
    iconSize: [number, number]
    iconAnchor: [number, number]
  }
  pokemon: Pokemon[] | []
}
