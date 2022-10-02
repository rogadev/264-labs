import type { Trainer } from '$lib/types'
import { writable, type Writable } from 'svelte/store'

let loaded = false

/**
 * Trainer Store
 */
export const trainer: Writable<Trainer> = writable({
  name: 'Roga',
  location: [0, 0],
  icon: {
    iconUrl: 'https://play.pokemonshowdown.com/sprites/trainers/ash-kalos.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  },
  pokemon: [],
})
