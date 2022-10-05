/**
 * Generate a random Pokemon ID between 1 and 898
 * @returns {number} A random number between 1 and 898
 */
export default function getRandomPokemonID() {
  return Math.floor(Math.random() * 905) + 1
}
