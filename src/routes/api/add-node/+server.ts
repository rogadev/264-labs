import nodeData from '$lib/data/nodes.json'
import fs from 'fs'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const body = await request.json()
  const location = body.location
  const prevNodeData = nodeData
  const newNodes = [...prevNodeData, location]
  fs.writeFileSync('src/lib/data/nodes.json', JSON.stringify(newNodes, null, 2))
  return {
    status: 200,
    body: {
      message: 'Node added',
    },
  }
}
