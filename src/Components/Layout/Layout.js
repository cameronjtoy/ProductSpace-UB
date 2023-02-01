import { Footer } from '../Footer/Footer.jsx';
import { Header } from "../Header/Header.jsx";
import { Navbar } from '../Navbar/Navbar.jsx';
import './index.css'

const Layout = () => {
    return (
        <div className = "App">
            <Navbar />

            <div className='page'>
            </div>
        </div>
    )
}

export default Layout