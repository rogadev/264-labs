import { writable } from 'svelte/store'

/**
 * Pokemon Store
 */
export const pokemon = writable([])
const pokemonDetails = {}
let loaded = false

/**
 * Loads and initializes the pokemon store
 */
export const loadPokemon = async () => {
  if (loaded) return
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=900'
  const response = await fetch(url)
  const data = await response.json()
  const loadedPokemon = data.results.map((pokemon, index) => ({
    name: data.name,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }))
  pokemon.set(loadedPokemon)
  loaded = true
}

/**
 * Get pokemon information via pokeapi v2.
 * @param {number} id  - The pokemon id
 * @returns Pokemon data or null if not found
 */
export const getPokemonByID = async (id: number) => {
  if (pokemonDetails[id]) return pokemonDetails[id]
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    const data = await response.json()
    pokemonDetails[id] = data
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}
