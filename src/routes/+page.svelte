<script lang="ts">
  import TopBar from '$lib/components/TopBar.svelte'
  import ActionBar from '$lib/components/ActionBar.svelte'
  import Map from '$lib/components/Map.svelte'
  import { loadPokemon } from '$lib/stores/pokemon'
  import { loadWeather } from '$lib/stores/weather'
  loadPokemon()
  loadWeather()
</script>

<svelte:head>
  <title>Roga's Pokemon Map</title>
</svelte:head>

<TopBar />
<Map />
<ActionBar />
