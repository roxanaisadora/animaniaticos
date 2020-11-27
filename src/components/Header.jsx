import React from 'react';
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header"> 
        <img className="header__img" src="https://image.freepik.com/vector-gratis/insignia-cafeteria-estilo-vintage_1176-95.jpg" alt="logo"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../icons/usuario3.png" alt="user"/>
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