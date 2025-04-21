import { useEffect, useState } from 'react';
import MainBox from '../../components/MainBox';
import Sidebar from '../../components/Sidebar';
import styles from './dynamicPage.module.css'
import { allAnimals, getAnimalsByCategory } from '../../data/data';
import MobileSidebar from '../../components/MobileComponents/MobileSidebar';

const DynamicPage = ({ preview = false, path = false, animalGroup, handleSetAnimal, currentAnimal, handleSetReviewAnimal, reviewAnimal }) => {

    const [categoryAnimals, setCategoryAnimals] = useState(null)

    useEffect(() => {
       reviewAnimal && handleSetReviewAnimal()
       currentAnimal && handleSetAnimal(null);
    }, [])

    useEffect(() => {
        preview ? setCategoryAnimals(allAnimals) : setCategoryAnimals(getAnimalsByCategory(animalGroup))
    }, [preview, setCategoryAnimals, animalGroup])

    return (
        <>
            <div className={styles.container}>
                <Sidebar animals={categoryAnimals} onSetAnimal={handleSetAnimal} path={path} currentAnimal={currentAnimal} />
                <MobileSidebar animals={categoryAnimals} onSetAnimal={handleSetAnimal} path={path} currentAnimal={currentAnimal} />
                <MainBox currentAnimal={currentAnimal} onReviewAnimal={handleSetReviewAnimal} preview={preview} group={animalGroup} />
            </div>
        </>
    )
}

export default DynamicPage;