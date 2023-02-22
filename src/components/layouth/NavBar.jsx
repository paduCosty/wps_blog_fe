import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


import './Navbar.css'

function NavBar() {

    // const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    function handleLogout() {
        // logout();
        navigate('/');
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    My Website
                </a>
                <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="/home" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/portofolio" className="nav-link">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                    {/* admin */}
                    <li className="nav-item">
                        <a href="/admin/users" className="nav-link">
                            Users
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/admin/products" className="nav-link">
                            Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/admin/testimonials" className="nav-link">
                            Testimonials
                        </a>
                    </li>

                    {/* {isAuthenticated ? ( */}
                        <li><button onClick={handleLogout} className="logout">Logout</button></li>
                    {/* ) : ( */}
                        <>
                            <li><Link to="/login" className="login-link">Login</Link></li>
                            <li><Link to="/register" className="register-link">Register</Link></li>
                            <li><Link to="/register" className="register-link">Profile</Link></li>
                        </>
                    {/* )} */}
                </ul>
            </div>
        </nav>

    );
}

export default NavBar