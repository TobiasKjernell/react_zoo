import { DotsThreeCircle, DotsThreeCircleVertical } from 'phosphor-react';
import styles from './mobileSidebar.module.css'
import { useState } from 'react';
import SidebarButton from '../../SidebarButton';

const MobileSidebar = ({ animals, onSetAnimal, path, currentAnimal }) => {

    const [open, setOpen] = useState(false);

    const handleSetOpen = () => setOpen(!open);

    return (
        <>
            <aside onClick={handleSetOpen} className={styles.container}>
                {open ? <>
                    <DotsThreeCircleVertical size={"30px"} color='var(--gold)' />
                    <div className={styles.itemContainer}>
                        {animals && animals.map((item, index) => <SidebarButton key={index} name={item.name} onSetAnimal={onSetAnimal} path={path} group={item.group} currentAnimal={currentAnimal} />)}
                    </div> </> : <DotsThreeCircle size={"30px"} color='var(--gold)' />}

            </aside>
        </>
    )
}

export default MobileSidebar;