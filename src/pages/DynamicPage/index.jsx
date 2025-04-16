import { useEffect, useState } from 'react';
import MainBox from '../../components/MainBox';
import Sidebar from '../../components/Sidebar';
import styles from './dynamicPage.module.css'
import Popup from '../../components/Popup';
import { allAnimals, getAnimalsByCategory } from '../../data/data';
import MobileSidebar from '../../components/MobileComponents/MobileSidebar';

const Home = ({ preview = false, path = false, animalGroup }) => {

    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [reviewAnimal, setReviewAnimal] = useState(false);
    const [categoryAnimals, setCategoryAnimals] = useState(null)
    const handleSetReviewAnimal = () => setReviewAnimal(!reviewAnimal);
    const handleSetAnimal = (animal) => setCurrentAnimal(animal !== currentAnimal ? animal : null);

    useEffect(() => {
        preview ? setCategoryAnimals(allAnimals) : setCategoryAnimals(getAnimalsByCategory(animalGroup))
    }, [preview, setCategoryAnimals, animalGroup])

    return (
        <>
            {reviewAnimal && <Popup currentAnimal={currentAnimal} onReviewAnimal={handleSetReviewAnimal} />}
            <div className={styles.container}>
                <Sidebar animals={categoryAnimals} onSetAnimal={handleSetAnimal} path={path} currentAnimal={currentAnimal} />
                <MobileSidebar animals={categoryAnimals} onSetAnimal={handleSetAnimal} path={path} currentAnimal={currentAnimal} />
                <MainBox currentAnimal={currentAnimal} onReviewAnimal={handleSetReviewAnimal} preview={preview} group={animalGroup} />
            </div>
        </>
    )
}

export default Home;