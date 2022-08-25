import { Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation/navigation.component'
import FiveDaysPage from './pages/five-days/five-days.component'
import AboutPAge from './pages/about/about.component'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<FiveDaysPage />} />
        <Route path='/about' element={<AboutPAge />} />
      </Routes>
    </>
  )
}

export default App
