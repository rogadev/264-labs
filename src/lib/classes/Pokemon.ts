import { PokemonClient } from 'pokenode-ts'
import { Icon } from 'leaflet'
import getRandomPokemonID from '/utils/getRandomPokemonID'
import titleCase from '$lib/utils/titleCase'

export default class Pokemon {
  static readonly client = (async () => await new PokemonClient())()
  name: string | null = null
  details: string | null
  /**
   * Fetch Pokemon details based on it's name
   * @param name The name of this pokemon
   * @returns Fetched Pokemon details
   */
  static fetchPokemonByName(name: string) {
    const details = (async () =>
      await Pokemon.client.getPokemonByName(name.toLowerCase()))()
    return details
  }
  /**
   * Fetch Pokemon details based on its ID number
   * @param id The Pokemon's ID number
   * @returns Fetched Pokemon details
   */
  static fetchPokemonById(id: number) {
    const details = (async () => await Pokemon.client.getPokemonById(id))()
    return details
  }

  /**
   * Creates a specific, named pokemon
   * @param number The Pokemon's ID number
   * @param name The personalized name of this pokemon
   */
  constructor(number?: number, name?: string) {
    if (number) {
      this.details = Pokemon.client.fetchPokemonById(number)
    }
    if (name) {
      this.name = titleCase(name.toLowerCase())
    }
  }
  /**
   * Gives the Pokemon a personalized name. Formats the name for title case.
   * @param name The personalized name of this pokemon
   */
  updateName(name: string) {
    this.name = titleCase(name.toLowerCase())
  }
  /**
   * Get the Pokemon's name, title cased
   * @returns {string} Name of this pokemon, title cased. If no name is set, returns the species name, title cased.
   */
  getName() {
    if (this.name) return this.name
    return titleCase(this.details.name.tolowerCase())
  }
}
