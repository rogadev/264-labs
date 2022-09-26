<script lang="ts">
  import Game from '$lib/classes/Game'
  import type { Map } from 'leaflet'
  import { onMount } from 'svelte'

  let game

  onMount(async () => {
    const L = await import('leaflet')
    const ipResponse = await fetch('https://api.ipify.org?format=json')
    const { ip } = await ipResponse.json()
    const locResponse = await fetch(`http://ip-api.com/json/${ip}`)
    const { lat, lon } = await locResponse.json()

    // Map
    const map: Map = L.map('map').setView([lat, lon], 14)
    // Tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map)
    // Marker
    L.marker([lat, lon]).addTo(map)

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
