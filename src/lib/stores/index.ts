import { writable, type Writable } from 'svelte/store'
import nodeList from '$lib/data/nodes'

export const nodes: Writable<MapNode[]> = writable(nodeList)
