import nodeLocations from '$lib/data/nodes.json'
import chooseRandom from '/utils/chooseRandom'
import MapNode from './MapNode'

export default class NodeMap {
  private static instance: NodeMap
  private static takenNodes: MapNode[] | [] = []
  private static availableNodes: MapNode[] | [] = []
  private constructor() {}
  static init() {
    if (this.instance) throw new Error('NodeMap has already been initialized.')
    this.instance = new NodeMap()
    this.availableNodes = nodeLocations.forEach((location) = > {
      this.availableNodes.push(new MapNode(location))
    })
    return this.instance
  }
  static getNodeMap() {
    return this.takenNodes
  }
  static createRandomPokemon() {
    const targetNode = chooseRandom(this.availableNodes)
    this.availableNodes = this.availableNodes.filter((node) = > node !== targetNode)
    targetNode.object = new Pokemon()
    this.takenNodes.push(targetNode)
  }
  static clearNode(id) {
    const targetNode = this.takenNodes.filter((node) = > node.id !== id)
    targetNode.object = null
    this.availableNodes.push(targetNode)
  }
}
