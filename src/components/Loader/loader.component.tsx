import { Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return (
    <Col
      md
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '3.5rem' }}
    >
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </Col>
  )
}

export default Loader
