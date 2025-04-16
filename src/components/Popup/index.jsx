import { getImageUrl, pictureNameCleanup } from '../../utils/utilities';
import CallbackButton from '../CallbackButton';
import styles from './popup.module.css'

const Popup = ({ currentAnimal, onReviewAnimal }) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <div className={styles.top}>
                    <h2 className={styles.name}>{currentAnimal.name}</h2>
                    <CallbackButton callback={onReviewAnimal} customClass={styles.close} text={"X"} />
                </div>
                <div className={styles.animalBox}>
                    <img src={getImageUrl(`${pictureNameCleanup(currentAnimal.name)}.png`)} alt="" className={styles.image} />
                    <p className={styles.description}>{currentAnimal.description}</p>
                    <div className={styles.information}>
                        <p>It's favourite food contains of {currentAnimal.food.toLowerCase()}.</p>
                        <p>Belongs to '{currentAnimal.group}' group.</p>
                        <p>It can weight up to {currentAnimal.weight}.</p>
                        <p>Can be up to {currentAnimal.lengthData}.</p>
                        <p>Can live up to {currentAnimal.lifespan}.</p>
                        <p>Location: {currentAnimal.found}.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;