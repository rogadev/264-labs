/**
 * 'Raining' | 'Sunny' | 'Snowing' | 'Foggy' | 'Windy'
 */
interface Weather {
  name: 'Sunny' | 'Raining' | 'Snowing' | 'Foggy' | 'Windy'
}

interface MapLocation {
  lat: number
  lng: number
}

interface LocationArray extends Array<number> {
  0: number
  1: number
}
