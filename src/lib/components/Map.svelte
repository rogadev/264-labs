<script lang="ts">
  import type { LatLngExpression } from 'leaflet'
  import nodes from '$lib/stores/nodes'
  import { onMount } from 'svelte'

  onMount(async () => {
    const L = await import('leaflet')
    const ipResponse = await fetch('https://api.ipify.org?format=json')
    const { ip } = await ipResponse.json()
    const locResponse = await fetch(`http://ip-api.com/json/${ip}`)
    const { lat, lon } = await locResponse.json()

    // Map
    const map = L.map('map').setView([lat, lon], 15)
    // Tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 14,
      maxZoom: 16,
      attribution: '© OpenStreetMap',
    }).addTo(map)

    // Trainer Marker
    L.marker([lat, lon]).addTo(map)

    // Nodes
    $nodes.forEach(async (node) => {
      const location: LatLngExpression = [node.location[0], node.location[1]]
      // coin flip 50/50 chance
      const hasPokemon = Math.random() < 0.5
      if (hasPokemon) {
        const pokeid = Math.floor(Math.random() * 905) + 1
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokeid}`
        )
        const pokemon = await pokemonResponse.json()
        const { sprites, species } = pokemon
        const icon = L.icon({
          iconUrl: sprites.front_default,
          iconSize: [50, 50],
          iconAnchor: [25, 25],
        })
        // clicking on the marker will open a popup with the pokemon name

        const marker = L.marker(location, { icon })
          .bindPopup(
            `<div style="cursor:pointer;">
            <img src="${sprites.front_default}" />
            <h1>${species.name.toUpperCase()}</h1>
            <small>Click to catch!</small>
          </div>`
          )
          .addEventListener('click', () => {
            alert('You caught a ' + species.name)
            marker.remove()
          })

        marker.addTo(map)
      } else {
        L.circleMarker(location, { radius: node.radius }).addTo(map)
      }
    })

    // right click to copy lat, lng to clipboard
    map.on('contextmenu', (e) => {
      navigator.clipboard.writeText(`${e.latlng.lat}, ${e.latlng.lng}`)
    })
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
