import { navigationData } from "../../data/data";
import NavigationButton from "../NavigationButton";
import styles from './navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.navContainer}>
            {navigationData.map((item, index) => <NavigationButton key={index} navigationName={item} linkPath={item}  />)}
        </nav>
    )
}

export default Navigation;