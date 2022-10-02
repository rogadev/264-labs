import { writable, type Writable } from 'svelte/store'
import nodeData from '$lib/data/nodes.json'
import fs from 'fs'

const radius = 8
const nodeList = nodeData.map((location) => {
  return {
    location,
    radius,
  }
})

export const nodes: Writable<MapNode[]> = writable(nodeList)

export function addNode(location: [number, number]) {
  const prevNodeData = nodeData
  const newNodes = [...prevNodeData, location]
  fs.writeFileSync('src/lib/data/nodes.json', JSON.stringify(newNodes, null, 2))
  nodes.update((n) => {
    return [...n, { location, radius }]
  })
}
