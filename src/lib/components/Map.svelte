<script lang="ts">
  import Game from '$lib/classes/Game'
  import type { Map, Layer } from 'leaflet'
  import { onMount } from 'svelte'
  import { nodes } from '$lib/stores/index'

  let game: Game
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
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map)
    L.marker([lat, lon]).addTo(map)
    L.marker([lat, lon + 0.01]).addTo(map)

    // Marker
    const markerArray: Layer[] = []

    $nodes.forEach((node) => {
      console.log(node.location) // getting correct latlng
      markerArray.push(L.marker(node.location))
    })

    L.layerGroup(markerArray).addTo(map)

    L.marker([lat, lon - 0.01]).addTo(map)

    game = Game.initializeMap(map)
  })
</script>

<div id="map" />

<style>
  #map {
    height: 70vh;
    width: 100%;
    margin: 0;
  }
</style>
