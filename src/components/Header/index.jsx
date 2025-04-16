
import { getImageUrl } from '../../utils/utilities';
import MobileNavigation from '../MobileComponents/MobileNavigation';
import Navigation from '../Navigation';
import styles from './header.module.css'

const Header = () => {

    return (
        <header className={styles.header}>
            <img src={`${getImageUrl('kangaroo.png')}`} alt="logo" className={styles.logo} />
            <Navigation />
            <h1 className={styles.parkName}>Australia Zoo</h1>
            <MobileNavigation />
        </header>
    )
}

export default Header;