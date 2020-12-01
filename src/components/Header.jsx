import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss';
import logo from "../assets/static/usuario3.png";

const Header = () => (
    <header className="header"> 
        <Link to="/">
            <img className="header__img" src="https://i.ibb.co/hVbX6xZ/logo-anime.png" alt="logo"/>
        </Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={logo} alt="user"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li>
                    <Link to="/login">
                        Iniciar sesión
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Cerrar Sessión
                    </Link>
                </li>
            </ul>
        </div>
   </header>
);

export default Header;