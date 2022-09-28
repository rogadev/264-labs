<script lang="ts">
  import TopBar from '$lib/components/TopBar.svelte'
  import ActionBar from '$lib/components/ActionBar.svelte'
  import Map from '$lib/components/Map.svelte'

  export let map
  console.log(map)
</script>

<TopBar />
<Map />
<ActionBar />
