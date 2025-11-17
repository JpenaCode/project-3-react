import './nav.css';
import React from 'react'; 

const NavBar = () => {
    return (
        <nav className='navSection'>
            <ul>
                <li className="nav-item" href="#">About Us</li>
                <li className="nav-item"href="#">Contact</li>
                <li className="nav-item"href="#">Featured Books</li>
                <li className="nav-item"href="#">Blog</li>
            </ul>
            <ul>
                <li>Sign Up For the Newsletter</li>
            </ul>
        </nav>
    );
};

export default NavBar;