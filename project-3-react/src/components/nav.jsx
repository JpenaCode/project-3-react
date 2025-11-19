import './nav.css';


const NavBar = () => {
    return (
        <nav className='navSection navbar navbar-expand-lg navbar-dark bg-dark px-3'>
            <ul className="navbar-nav me-auto">
                <li className="nav-item nav-link" href="#">Featured Books</li>
                <li className="nav-item nav-link" href="#">My List</li>
            </ul>

        </nav>
    );
};

export default NavBar;
