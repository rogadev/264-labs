import { World, type World } from './World'

export interface Game {
  world: World
}

export class Game {
  world: World
  constructor() {
    this.world = new World()
  }
}
