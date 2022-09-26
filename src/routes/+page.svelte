<script lang="ts">
  import ActionBar from '$lib/components/ActionBar.svelte'
  import Map from '$lib/components/Map.svelte'
</script>

<h1 class="text-lg font-bold p-4">Roga's Pokemon Map</h1>

<Map />
<ActionBar />

<style>
  h1 {
    display: table-cell;
    height: 10vh;
    vertical-align: middle;
    padding-left: 2rem;
  }
</style>
