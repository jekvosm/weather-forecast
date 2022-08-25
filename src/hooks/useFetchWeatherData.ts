import { useEffect, useState } from 'react'

import axios, { AxiosError } from 'axios'

import {
  IDataForecast,
  IDataForecastResponse,
} from '../models/data-forecast.model'
import { getDateParams } from '../components/day-info/day-info.utils'

const APIkey = process.env.REACT_APP_WEATHER_API_KEY

export const useFetchWeatherData = (keyOfCity: string) => {
  const [weatherData, setWeatherData] = useState<IDataForecast[]>([])
  const [loading, setLoading] = useState(false)
  const [errorWeatherMessage, setErrorWeatherMessage] = useState('')

  useEffect(() => {
    const setCityAndWeather = async () => {
      try {
        if (!keyOfCity) return

        setErrorWeatherMessage('')
        setLoading(true)

        const urlWeather = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${keyOfCity}?apikey=${APIkey}&metric=true&details=true&language=ru-ru`

        const response = await axios.get<IDataForecastResponse>(urlWeather)

        const convertDataForeCast = convertData(response.data)

        setWeatherData(convertDataForeCast)

        setLoading(false)
      } catch (e: unknown) {
        const error = e as AxiosError

        setLoading(false)
        setErrorWeatherMessage(error.message)
      }
    }

    setCityAndWeather()
  }, [keyOfCity])

  return { weatherData, loading, errorWeatherMessage }
}

const convertData = (data: IDataForecastResponse): IDataForecast[] => {
  const { DailyForecasts } = data

  const convertDailyForecasts = DailyForecasts.map(dayForecast => {
    const { EpochDate, Date, Day, Temperature } = dayForecast
    const { Icon: iconNumber, IconPhrase: iconPhrase } = Day
    const {
      Maximum: { Value: maxTemp },
      Minimum: { Value: minTemp },
    } = Temperature

    const { weekday, dayNumber } = getDateParams(Date)

    const id = EpochDate

    let iconNumberStr: string

    if (iconNumber < 10) {
      iconNumberStr = '0' + iconNumber
    } else {
      iconNumberStr = String(iconNumber)
    }

    return {
      id,
      dayNumber,
      weekday,
      iconNumberStr,
      iconPhrase,
      maxTemp,
      minTemp,
    }
  })

  return convertDailyForecasts
}
