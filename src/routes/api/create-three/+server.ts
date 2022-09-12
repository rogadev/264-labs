// import { error } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export function GET() {
  // Create 3 pokemon
  const pokemon1: Pokemon = {
    name: 'Tylerchu',
    type: 'electric',
    size: 1,
    hp: 100,
    normalAttack: {
      name: 'Thunderbolt',
      power: 100,
      min: 1,
      max: 10,
      type: 'electric'
    },
    specialAttack: {
      name: 'Thunder',
      power: 200,
      min: 1,
      max: 10,
      type: 'electric'
    },
    attack(target: Pokemon) {
      const damage = Math.floor(Math.random() * (this.normalAttack.max - this.normalAttack.min + 1) + this.normalAttack.min);
      target.hp -= damage;
      return damage;
    },
    special(target: Pokemon) {
      const damage = Math.floor(Math.random() * (this.specialAttack.max - this.specialAttack.min + 1) + this.specialAttack.min);
      target.hp -= damage;
      return damage;
    },
  }

  const pokemon2: Pokemon = {
    name: 'Nilesaur',
    type: 'grass',
    size: 1,
    hp: 100,
    normalAttack: {
      name: 'Vine Whip',
      power: 100,
      min: 1,
      max: 10,
      type: 'grass'
    },
    specialAttack: {
      name: 'Solar Beam',
      power: 200,
      min: 1,
      max: 10,
      type: 'grass'
    },
    attack(target: Pokemon) {
      const damage = Math.floor(Math.random() * (this.normalAttack.max - this.normalAttack.min + 1) + this.normalAttack.min);
      target.hp -= damage;
      return damage;
    },
    special(target: Pokemon) {
      const damage = Math.floor(Math.random() * (this.specialAttack.max - this.specialAttack.min + 1) + this.specialAttack.min);
      target.hp -= damage;
      return damage;
    },
  }

  const pokemon3: Pokemon = {
    name: 'Jamismon',
    type: 'fire',
    size: 1,
    hp: 100,
    normalAttack: {
      name: 'Ember',
      power: 100,
      min: 1,
      max: 10,
      type: 'fire'
    },
    specialAttack: {
      name: 'Fire Blast',
      power: 200,
      min: 1,
      max: 10,
      type: 'fire'
    },
    attack(target: Pokemon) {
      const damage = Math.floor(Math.random() * (this.normalAttack.max - this.normalAttack.min + 1) + this.normalAttack.min);
      target.hp -= damage;
      return damage;
    },
    special(target: Pokemon) {
      const damage = Math.floor(Math.random() * (this.specialAttack.max - this.specialAttack.min + 1) + this.specialAttack.min);
      target.hp -= damage;
      return damage;
    },
  }

  return new Response(JSON.stringify({ pokemon: [pokemon1, pokemon2, pokemon3] }))
}
