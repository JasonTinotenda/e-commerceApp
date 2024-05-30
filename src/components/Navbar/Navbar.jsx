import  { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt='Company Logo' className='logo' />
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</li>
                <li onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Services</li>
                <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
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
