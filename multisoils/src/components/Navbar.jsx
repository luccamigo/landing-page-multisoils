import React from 'react';
import './Navbar.css';
import image from "../assets/MultiSoils.png"

const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-container">
                <div className="logo"><img src={image} alt="logo Multisoils" /></div>
                <div className="menu">
                    <a className="btn cadastre-se" href='https://multisoils.com.br/register'>Cadastre-se</a>
                    <a className="btn entrar" href='https://multisoils.com.br/login'>Entrar</a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
