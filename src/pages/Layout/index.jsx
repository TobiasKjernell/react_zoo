import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";
import styles from './layout.module.css'

const Layout = ({ reviewAnimal, currentAnimal, handleSetReviewAnimal }) => {
    return (
        <>
            <Header reviewAnimal={reviewAnimal} handleSetReviewAnimal={handleSetReviewAnimal} />
            <div className={styles.container}>
                {reviewAnimal && currentAnimal && <Popup currentAnimal={currentAnimal} onReviewAnimal={handleSetReviewAnimal} />}
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout;