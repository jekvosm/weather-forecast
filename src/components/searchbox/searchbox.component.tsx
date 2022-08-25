import { FC } from 'react'
import { Col } from 'react-bootstrap'

interface SearchboxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Searchbox: FC<SearchboxProps> = ({ onChange, placeholder }) => {
  return (
    <Col
      className='text-center d-flex align-items-center'
      style={{ minHeight: '3.5rem' }}
    >
      <input
        className='form-control w-auto mx-auto bg-light'
        type='search'
        onChange={onChange}
        placeholder={placeholder}
      />
    </Col>
  )
}

export default Searchbox
