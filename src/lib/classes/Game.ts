import type { Map } from 'leaflet'

class Game {
  private static instance: Game
  map: Map

  static getInstance() {
    if (!Game.instance) {
      throw new Error('Game not initialized')
    }
    return Game.instance
  }

  static async init(mapElement: HTMLElement) {
    if (!Game.instance) {
      const L = await import('leaflet')
      const map = L.map(mapElement)

      Game.instance = new Game(map)
    }
    return Game.instance
  }

  private constructor(map: Map) {
    Game.map = map
  }
}

export default Game
