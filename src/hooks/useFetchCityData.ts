import { useEffect, useState } from 'react'

import axios, { AxiosError } from 'axios'

import { ICity } from '../models/city.model'

const APIkey = process.env.REACT_APP_WEATHER_API_KEY

export const useFetchCityData = (writtenNameOfCity: string) => {
  const [currentNameOfCity, setCurrentNameOfCity] = useState('Самара')
  const [keyOfCity, setKeyOfCity] = useState('')
  const [errorCity, setErrorCity] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const setCityAndWeather = async () => {
      try {
        setErrorCity('')
        setLoading(true)

        const urlLocationCity = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${writtenNameOfCity}&language=ru-ru`
        const response = await axios.get<ICity[]>(urlLocationCity)

        if (!response.data.length) {
          setLoading(false)
          setCurrentNameOfCity('Город не найден')
          setKeyOfCity('')
          return
        }

        const { LocalizedName, Key } = response.data[0]

        setLoading(false)

        setCurrentNameOfCity(LocalizedName)
        setKeyOfCity(Key)
      } catch (e: unknown) {
        const error = e as AxiosError

        setLoading(false)
        setErrorCity(error.message)
      }
    }

    setCityAndWeather()
  }, [writtenNameOfCity])

  return { currentNameOfCity, keyOfCity, loading, errorCity }
}
