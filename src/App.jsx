import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import DynamicPage from './pages/DynamicPage'
import { animalRoutes, getAnimalsByCategory } from './data/data'
import { useState } from 'react';

function App() {

  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [reviewAnimal, setReviewAnimal] = useState(false);
  const handleSetReviewAnimal = () => setReviewAnimal(!reviewAnimal);
  const handleSetAnimal = (animal) => setCurrentAnimal(animal !== currentAnimal ? animal : null);

  return (
    <>
      <Routes>
        <Route element={<Layout currentAnimal={currentAnimal} handleSetReviewAnimal={handleSetReviewAnimal} reviewAnimal={reviewAnimal}  handleSetAnimal={handleSetAnimal} />} >
          <Route element={<DynamicPage preview={true} currentAnimal={currentAnimal} handleSetReviewAnimal={handleSetReviewAnimal} reviewAnimal={reviewAnimal} handleSetAnimal={handleSetAnimal}  />} path='/' />
          {animalRoutes.map((animalType, index) =>
            <Route element={<DynamicPage key={index} animalGroup={animalType} preview={false} path={true} currentAnimal={currentAnimal} handleSetReviewAnimal={handleSetReviewAnimal} reviewAnimal={reviewAnimal} handleSetAnimal={handleSetAnimal}  />} path={animalType}>
              {getAnimalsByCategory(animalType).map((animal, indexChild) =>
                <Route key={indexChild} element={<DynamicPage key={index} animals={animal} currentAnimal={currentAnimal} handleSetReviewAnimal={handleSetReviewAnimal} reviewAnimal={reviewAnimal} handleSetAnimal={handleSetAnimal} />} path={animal.name.replaceAll(" ", "").toLowerCase()} />)}
            </Route>)}
        </Route>
      </Routes>
    </>
  )
}

export default App
