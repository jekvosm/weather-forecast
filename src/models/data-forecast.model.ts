export interface IDataForecastResponse {
  DailyForecasts: IDayForecastResponse[]
}

export interface IDayForecastResponse {
  EpochDate: number
  Date: string
  Temperature: {
    Minimum: {
      Value: number
    }
    Maximum: {
      Value: number
    }
  }
  Day: {
    Icon: number
    IconPhrase: string
  }
}

export interface IDataForecast {
  id: number
  dayNumber: string
  weekday: string
  iconNumberStr: string
  iconPhrase: string
  maxTemp: number
  minTemp: number
}
