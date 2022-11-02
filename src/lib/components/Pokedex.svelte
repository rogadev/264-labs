<script lang="ts">
  import { pokemon, fetchPokemon } from '$lib/stores/pokemon'
  import type { Pokemon } from '$lib/types/pokemon.type'
  import PokemonDetails from '$lib/components/PokemonDetails.svelte'

  let searchPhrase = ''
  let filteredResults: Pokemon[] = []

  $: {
    if (searchPhrase.length > 0) {
      filteredResults = $pokemon.filter((pokeman: Pokemon) =>
        pokeman.name.toLowerCase().includes(searchPhrase.toLowerCase())
      )
    } else {
      filteredResults = [...$pokemon]
    }
  }

  fetchPokemon()
</script>

<div class="container">
  <h1>Pokedex</h1>
  <input
    type="text"
    placeholder="Search for a pokemon"
    bind:value={searchPhrase}
  />
  <div class="grid grid-cols-3 gap-4">
    {#each filteredResults as pokeman}
      <PokemonDetails {pokeman} />
    {/each}
  </div>
</div>
