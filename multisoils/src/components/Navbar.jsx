import React from 'react';
import './Navbar.css';
import image from "../assets/MultiSoils.png"

const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-container">
                <div className="logo"><img src={image} alt="logo Multisoils" /></div>
                <div className="menu">
                    <button className="btn cadastre-se">Cadastre-se</button>
                    <button className="btn entrar">Entrar</button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
