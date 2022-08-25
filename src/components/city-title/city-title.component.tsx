import { FC } from 'react'
import { Col } from 'react-bootstrap'

interface CityTitleProps {
  currentNameOfCity: string
}

const CityTitle: FC<CityTitleProps> = ({ currentNameOfCity }) => {
  return (
    <Col
      md
      style={{ minHeight: '3.5rem' }}
      className='d-flex justify-content-center align-items-center'
    >
      <h1>{currentNameOfCity}</h1>
    </Col>
  )
}

export default CityTitle
