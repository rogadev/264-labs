export default function* generateID() {
  let id = 0
  while (true) {
    yield id++
  }
}
