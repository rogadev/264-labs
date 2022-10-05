import chooseRandom from '$lib/utils/chooseRandom'

type WeatherState = 'Sunny' | 'Cloudy' | 'Windy' | 'Rainy' | 'Snowy' | 'Stormy'

export default class Weather {
  private updater: NodeJS.Timeout
  description: WeatherState
  icon: string
  private setIcon() {
    switch (this.description) {
      case 'Sunny':
        this.icon = '/img/weather/sun.png'
        break
      case 'Cloudy':
        this.icon = '/img/weather/cloud.png'
        break
      case 'Windy':
        this.icon = '/img/weather/wind.png'
        break
      case 'Rainy':
        this.icon = '/img/weather/rain.png'
        break
      case 'Snowy':
        this.icon = '/img/weather/snow.png'
        break
      case 'Stormy':
        this.icon = '/img/weather/storm.png'
        break
      default:
        this.icon = '/img/weather/sun.png'
        break
    }
  }
  changeWeather() {
    this.description = chooseRandom([
      'Sunny',
      'Cloudy',
      'Windy',
      'Rainy',
      'Snowy',
      'Stormy',
    ])
    this.setIcon()
  }
  private updateWeather() {
    clearTimeout(this.updater)
    this.changeWeather()
    this.updater = setTimeout(() => {
      this.updateWeather()
    }, 1000 * 60 * 5)
  }
  constructor() {
    this.updateWeather()
  }
  subscribe() {}
}
