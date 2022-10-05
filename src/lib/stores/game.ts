// deps
import { writable, type Writable } from 'svelte/store'
// classes
import Game from '$lib/classes/Game'
// helpers
import chooseRandom from '$lib/utils/chooseRandom'
// types
// ...

export function initGame(map: Map) {
  Game.init(map)
}

export const game: Writable<Game> = writable(Game)
