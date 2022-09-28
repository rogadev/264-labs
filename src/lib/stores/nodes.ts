import { writable, type Writable } from 'svelte/store'
import nodeList from '$lib/data/nodes'

const nodes: Writable<MapNode[]> = writable(nodeList)
export default nodes
