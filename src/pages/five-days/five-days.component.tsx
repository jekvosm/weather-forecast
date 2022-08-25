import { useMemo, useState } from 'react'
import { useFetchCityData } from '../../hooks/useFetchCityData'

import CityTitle from '../../components/city-title/city-title.component'
import Searchbox from '../../components/searchbox/searchbox.component'
import FiveDaysList from '../../components/five-days-list/five-days-list.component'

import {
  debounce,
  firstLetterToUpperСase,
} from '../../components/five-days-list/five-days-list.utils'

import { Container, Row } from 'react-bootstrap'
import Loader from '../../components/Loader/loader.component'
import ErrorMessage from '../../components/error-message/error-message.component'

const FiveDaysPage = () => {
  const [writtenNameOfCity, setWrittenNameOfCity] = useState('Самара')

  const { currentNameOfCity, keyOfCity, errorCity, loading } =
    useFetchCityData(writtenNameOfCity)

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let writtenNameOfCity = event.target.value

    if (!writtenNameOfCity) writtenNameOfCity = 'Самара'

    setWrittenNameOfCity(firstLetterToUpperСase(writtenNameOfCity))
  }

  const debouncedChangeHandler = useMemo(
    () => debounce(onChangeHandler, 500),
    []
  )

  return (
    <Container className='h-100 pt-6 pb-3 d-flex gap-3 flex-column'>
      <Row className='text-center gap-2'>
        {loading ? (
          <Loader />
        ) : (
          <CityTitle currentNameOfCity={currentNameOfCity} />
        )}

        <Searchbox
          onChange={debouncedChangeHandler}
          placeholder='Найти город'
        />
      </Row>

      {errorCity ? (
        <ErrorMessage error={errorCity} />
      ) : (
        keyOfCity && <FiveDaysList keyOfCity={keyOfCity} />
      )}
    </Container>
  )
}

export default FiveDaysPage
