import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from "../assets/static/usuario3.png";

const Header = () => (
    <header className="header"> 
        <img className="header__img" src="https://i.ibb.co/hVbX6xZ/logo-anime.png" alt="logo"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={logo} alt="user"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sessión</a></li>
            </ul>
        </div>
   </header>
);

export default Header;