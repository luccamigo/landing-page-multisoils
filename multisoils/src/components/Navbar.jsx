import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-container">
                <div className="logo">MultiSoils</div>
                <div className="menu">
                    <button className="btn cadastre-se">Cadastre-se</button>
                    <button className="btn entrar">Entrar</button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
