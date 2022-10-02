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

export interface Trainer {
  name: string
  pokemon: Pokemon[]
}

/**
 * 'Raining' | 'Sunny' | 'Snowing' | 'Foggy' | 'Windy'
 */
export type Weather = 'Sunny' | 'Raining' | 'Snowing' | 'Foggy' | 'Windy'
export type NodeType = 'pokemon' | 'trainer' | 'npc' | 'item' | 'gym' | 'shop'

export interface MapNode {
  radius: number
  id: string
  location: [number, number]
  diameter: number
}
