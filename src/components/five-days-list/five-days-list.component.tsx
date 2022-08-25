import { useFetchWeatherData } from '../../hooks/useFetchWeatherData'

import DayInfo from '../day-info/day-info.component'
import Loader from '../Loader/loader.component'

import Row from 'react-bootstrap/Row'

import ErrorMessage from '../error-message/error-message.component'
import { FC } from 'react'

interface FiveDaysListProps {
  keyOfCity: string
}

const FiveDaysList: FC<FiveDaysListProps> = ({ keyOfCity }) => {
  const { weatherData, loading, errorWeatherMessage } =
    useFetchWeatherData(keyOfCity)

  return (
    <Row className='justify-content-center align-self-center gap-3'>
      {errorWeatherMessage && <ErrorMessage error={errorWeatherMessage} />}

      {loading ? (
        <Loader />
      ) : (
        weatherData.map(weatherOfTheDay => {
          return (
            <DayInfo
              key={weatherOfTheDay.id}
              weatherOfTheDay={weatherOfTheDay}
            />
          )
        })
      )}
    </Row>
  )
}

export default FiveDaysList
