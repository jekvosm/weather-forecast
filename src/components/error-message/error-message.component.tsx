import { FC } from 'react'
import { Col, Row } from 'react-bootstrap'

interface ErrorMessageProps {
  error: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <Row>
      <Col>
        <p className='text-center'>{error}</p>
      </Col>
    </Row>
  )
}

export default ErrorMessage
