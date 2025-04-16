import styles from './introductionBox.module.css'

const IntroductionBox = ({headerText, text}) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.headerTitle}>{headerText}</h1>
            <p className={styles.text}>
               {text}
            </p>
        </div>
    )
}

export default IntroductionBox;