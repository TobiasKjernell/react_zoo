import { NavLink } from "react-router";
import styles from './navigationButton.module.css'


const NavigationButton = ({linkPath, navigationName , callback = null}) => {
    return (
        <div>
            <NavLink onClick={callback && callback} className={({isActive}) => isActive ? styles.active : "" + styles['navItem']} to={linkPath === 'home' ? '/' : linkPath}>{navigationName}</NavLink>
        </div>
    )
}

export default NavigationButton;