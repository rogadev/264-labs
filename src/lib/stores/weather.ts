import { writable, type Writable } from 'svelte/store'
import chooseRandom from '$lib/utils/chooseRandom'
import type { Weather } from '$lib/types'

// TODO Weather update.
// - Weather should be updated every 5 minutes
// - Weather should be updated when the player enters a new area (maybe on tile update)
// -

let loaded = false
const weatherChoices: Weather = [
  'Sunny',
  'Cloudy',
  'Rainy',
  'Snowy',
  'Windy',
  'Foggy',
]

export const weather: Writable<Weather> = writable(null)

export function loadWeather() {
  if (loaded) return
  const initialWeather = chooseRandom(weatherChoices)
  console.info('Initializing weather:', initialWeather)
  weather.set(initialWeather)
  loaded = true
}

export function changeWeather() {
  const newWeather = chooseRandom(weatherChoices)
  console.info('Weather has changed:', newWeather)
  weather.set(newWeather)
}
