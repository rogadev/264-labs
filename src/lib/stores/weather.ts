import { writable, type Writable } from 'svelte/store'
import chooseRandom from '$lib/utils/chooseRandom'
import type { Weather } from '$lib/types/types'

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

export function initWeather() {
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
