import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import DynamicPage from './pages/DynamicPage'
import { animalRoutes, getAnimalsByCategory } from './data/data'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route element={<DynamicPage preview={true} />} path='/' />
          {animalRoutes.map((animalType, index) =>
            <Route element={<DynamicPage key={index} animalGroup={animalType} preview={false} path={true} />} path={animalType}>
              {getAnimalsByCategory(animalType).map((animal, indexChild) =>
                <Route key={indexChild} element={<DynamicPage key={index} animals={animal} />} path={animal.name.replaceAll(" ", "").toLowerCase()} />)}
            </Route>)}
        </Route>
      </Routes>
    </>
  )
}

export default App
