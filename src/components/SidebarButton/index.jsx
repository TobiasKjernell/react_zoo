import { NavLink } from 'react-router';
import { getAnimalByName } from '../../data/data';
import styles from './sidebarButton.module.css'

const SidebarButton = ({name, onSetAnimal, path, currentAnimal}) => {

    return (
        <>
        {!path ? <button onClick={() => onSetAnimal(getAnimalByName(name))} className={styles.button + " " + (currentAnimal?.name === name ? styles['active'] : "" ) }>{name}</button> :
          <NavLink onClick={() => onSetAnimal(getAnimalByName(name))} className={({isActive}) => isActive ? styles.active : "" + styles['button'] } to={name.replaceAll(" ", "").toLowerCase()}>{name}</NavLink>}
        </>
    )
}

export default SidebarButton;