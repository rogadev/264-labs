import { writable, type Writable } from 'svelte/store'
import chooseRandom from '$lib/utils/chooseRandom'
import type { Weather } from '$lib/types/types'

const weather: Writable<MapNode[]> = writable(initWeather())

function initWeather() {
  const choices: Weather = ['Sunny', 'Raining', 'Snowing', 'Foggy', 'Windy']
  const weather = chooseRandom(choices)
  console.log('Initializing weather:', weather)
  return weather
}

export default nodes
