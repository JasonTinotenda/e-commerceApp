import  { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt='Company Logo' className='logo' />
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='Search Icon' className='search-icon' /> 
                <div className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt='Basket Icon' className='basket-icon' />
                    <div className='dot'></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    );
}

export default Navbar;
