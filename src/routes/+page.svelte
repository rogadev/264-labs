<script lang="ts">
  import { onMount } from 'svelte'

  onMount(async () => {
    const L = await import('leaflet')

    const ipResponse = await fetch('https://api.ipify.org?format=json')
    const { ip } = await ipResponse.json()
    const locResponse = await fetch(`http://ip-api.com/json/${ip}`)
    const { lat, lon } = await locResponse.json()

    console.log(lat, lon)

    const map = L.map('map').setView([lat, lon], 16)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map)
    L.marker([lat, lon]).addTo(map)
    console.log(map)
  })
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div id="map" />

<style>
  #map {
    height: 600px;
  }
</style>
