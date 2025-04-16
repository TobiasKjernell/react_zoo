import { navigationData } from "../../data/data";
import NavigationButton from "../NavigationButton";
import styles from './navigation.module.css'

const Navigation = ({reviewAnimal, callback}) => {
    return (
        <nav className={styles.navContainer}>
            {navigationData.map((item, index) => <NavigationButton callback={ reviewAnimal && callback} key={index} navigationName={item} linkPath={item}  />)}
        </nav>
    )
}

export default Navigation;