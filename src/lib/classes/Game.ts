import type { Map } from 'leaflet'

export default class Game {
  private static instance: Game
  static map: Map

  static getInstance() {
    if (!Game.instance) {
      throw new Error('Game not initialized')
    }
    return Game.instance
  }

  static initializeMap(map: Map) {
    if (!Game.instance) {
      Game.instance = new Game(map)
    }
    return Game.instance
  }

  private constructor(map: Map) {
    Game.map = map
  }
}
