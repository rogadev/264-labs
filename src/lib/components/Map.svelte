<script lang="ts">
  import type { Map, Layer } from 'leaflet'
  import { onMount } from 'svelte'
  import { nodes } from '$lib/stores/index'

  let map: Map

  onMount(async () => {
    const L = await import('leaflet')
    const ipResponse = await fetch('https://api.ipify.org?format=json')
    const { ip } = await ipResponse.json()
    const locResponse = await fetch(`http://ip-api.com/json/${ip}`)
    const { lat, lon } = await locResponse.json()

    // Map
    map = L.map('map').setView([lat, lon], 14)
    // Tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 15,
      maxZoom: 14,
      attribution: '© OpenStreetMap',
    }).addTo(map)

    // Trainer Marker
    L.marker([lat, lon]).addTo(map)

    // Nodes
    const markerArray: Layer[] = []
    $nodes.forEach((node) => {
      markerArray.push(L.circleMarker(node.location, { radius: node.diameter }))
    })
    L.layerGroup(markerArray).addTo(map)

    // right click to copy lat, lng to clipboard
    map.on('contextmenu', (e) => {
      navigator.clipboard.writeText(`${e.latlng.lat}, ${e.latlng.lng}`)
    })
  })
</script>

<svelte:window />

<div id="map" />

<style>
  #map {
    height: 70vh;
    width: 100%;
    margin: 0;
  }
</style>
