import { getImageUrl, pictureNameCleanup } from '../../utils/utilities';
import CallbackButton from '../CallbackButton';
import styles from './informationBox.module.css';

const InformationBox = ({currentAnimal, preview, onReviewAnimal}) => {
    return (
        <div className={styles.infoBox}>
            <div className={styles.left}>
                <img src={`${getImageUrl(`${pictureNameCleanup(currentAnimal.name)}.png`)}`} alt="" className={styles.image} />
            </div>
            <div className={styles.right}>
                <h2 className={styles.name}>{currentAnimal.name}</h2>
                <p className={styles.description}>{preview ? currentAnimal.description.slice(0, 200) + "..." : currentAnimal.description}</p>
                <p className={styles.description}><span className={styles.infoHighlight}>Eats: </span > {currentAnimal.food}</p>
                <p className={styles.description}><span className={styles.infoHighlight}>Group: </span>{currentAnimal.group}</p>
                {preview ? <CallbackButton customClass={styles.button} text={'Read more ...'} callback={onReviewAnimal} />
                    : <>
                        <p className={styles.description}><span className={styles.infoHighlight}>Weights: </span> {currentAnimal.weight}</p>
                        <p className={styles.description}><span className={styles.infoHighlight}>Length: </span>{currentAnimal.lengthData}</p>
                        <p className={styles.description}><span className={styles.infoHighlight}>Lifespan: </span>{currentAnimal.lifespan}</p>
                        <p className={styles.description}><span className={styles.infoHighlight}>Location: </span>{currentAnimal.found}</p>
                    </>
                }
            </div>
        </div>
    )
}

export default InformationBox;