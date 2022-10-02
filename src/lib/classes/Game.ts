import type { Map } from 'leaflet'

class Game {
  private static instance: Game

  map: Map
  trainer: Trainer

  static getInstance() {
    if (!Game.instance) {
      throw new Error('Game not initialized')
    }
    return Game.instance
  }

  static async init(map: Map) {
    if (!Game.instance) {
      Map.init(map)
      Game.instance = new Game(map)
    }
    return Game.instance
  }

  private constructor(map: Map) {
    Game.map = map
  }

  setTrainerName(name: string) {
    this.trainer = new Trainer(name)
  }
}

export default Game
