/**
 * Returns a random item from an array.
 * @param array The array to choose from
 * @returns random item from the array
 */
export default function chooseRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}
