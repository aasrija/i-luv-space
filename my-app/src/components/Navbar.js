import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import './Navbar.css';

function Navbar(){

    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <nav className= "navbar">
            <div className="navbar-container">
                <a href= "/" className="navbar-logo" onClick={closeMobileMenu}> 
                    <i class="fa-solid fa-user-astronaut"> ILUVSPACE</i>
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className="nav-links" onClick={closeMobileMenu}>
                            Explore
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/products" className="nav-links" onClick={closeMobileMenu}>
                            Gallery
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </a>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
           </div>
        </nav>
    );
}

export default Navbar