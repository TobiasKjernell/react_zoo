import { getIntroductionInfo } from '../../data/data';
import InformationBox from '../InformationBox';
import IntroductionBox from '../IntroductionBox';
import styles from './mainBox.module.css'

const MainBox = ({ currentAnimal, onReviewAnimal, preview, group }) => {
    return (
        <main className={styles.container}>
            {
                currentAnimal ? <InformationBox onReviewAnimal={onReviewAnimal} preview={preview} currentAnimal={currentAnimal} /> : <IntroductionBox {...getIntroductionInfo(preview ? null : group)} />     
            }
        </main>
    )
}

export default MainBox;