import nodes from '$lib/data/nodes'

const MAX_ZOOM = 18
const STARTING_ZOOM = 13

export default async (window: Window) => {
  console.log('Initializing map...')
  console.log(window)

  // Leaflet
  const L = await import('leaflet')
  // Fetch IP Address
  const ipResponse = await fetch('https://api.ipify.org?format=json')
  const { ip } = await ipResponse.json()
  // Create Map
  const map = L.map('map')
  // Fetch Location
  const locResponse = await fetch(`http://ip-api.com/json/${ip}`)
  const { lat, lon } = await locResponse.json()
  // Set View
  map.setView([lat, lon], STARTING_ZOOM)
  // Add Tile Layer
  const tileLayer = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: MAX_ZOOM,
      attribution: '© OpenStreetMap',
    }
  ).addTo(map)
  // Add Nodes
  nodes.forEach((node) => {
    const marker = L.circleMarker(node.location, {
      radius: node.diameter / 2,
      interactive: false,
    }).addTo(map)
  })

  return map
}
