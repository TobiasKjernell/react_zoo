import { useState } from "react"
import styles from './mobileNav.module.css'
import { navigationData } from "../../../data/data";
import NavigationButton from "../../NavigationButton";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const handleSetOpen = () => setOpen(!open);

    return (

        <div className={styles.container}>
            <div onClick={handleSetOpen} className={styles.button}>{open ? "@" : "£"}</div>
            {open && <div className={styles.dropdown}>{navigationData.map((item, index) => <NavigationButton key={index} navigationName={item} linkPath={item} callback={handleSetOpen} />)}</div>}
        </div>

    )
}

export default MobileNavigation;