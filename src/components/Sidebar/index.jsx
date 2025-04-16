import SidebarButton from '../SidebarButton';
import styles from './sidebar.module.css'

const Sidebar = ({animals, onSetAnimal, path, currentAnimal }) => {
    return (
       <aside className={styles.container}>
            {animals && animals.map((item, index) => <SidebarButton key={index} name={item.name} onSetAnimal={onSetAnimal} path={path} group={item.group} currentAnimal={currentAnimal}/>)}
       </aside>
    )
}

export default Sidebar;