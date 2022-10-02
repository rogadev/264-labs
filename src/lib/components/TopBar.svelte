<script lang="ts">
  import { weather } from '$lib/stores/weather'
</script>

<div
  class="absolute top-0 z-10 text-white w-[100vw] h-[10vh] flex justify-between items-center px-16"
>
  <h1 class="text-lg font-bold">Roga's Pokemon Game</h1>
  <h2 class="text-md font-bold">{$weather}</h2>
</div>
