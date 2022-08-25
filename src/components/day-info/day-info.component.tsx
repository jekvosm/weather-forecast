import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import './day-info.styles.scss'
import { IDataForecast } from '../../models/data-forecast.model'
import { FC } from 'react'

interface DayInfoProps {
  weatherOfTheDay: IDataForecast
}

const DayInfo: FC<DayInfoProps> = ({ weatherOfTheDay }) => {
  const { dayNumber, weekday, maxTemp, minTemp, iconNumberStr, iconPhrase } =
    weatherOfTheDay

  return (
    <Col className='col-auto mt-2'>
      <Card
        style={{ width: '12rem', height: '18rem' }}
        className='card-item bg-custom-primary'
      >
        <Card.Body className='text-center'>
          <Card.Title className='mb-2 text-uppercase'>{weekday}</Card.Title>

          <Card.Text>{dayNumber}</Card.Text>

          <Card.Text className='fs-3'>
            {Math.round(maxTemp)}&#176;/{Math.round(minTemp)}&#176;
          </Card.Text>

          <Card.Img
            src={`https://www.accuweather.com//images/weathericons/${iconNumberStr}.svg`}
            alt='icon'
            style={{ height: '70px', width: '70px' }}
            className='mt-1 mb-1'
          />

          <Card.Text>{iconPhrase}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default DayInfo
