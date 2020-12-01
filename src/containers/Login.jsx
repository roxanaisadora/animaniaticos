import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const Login = () => (
    <section className="login">
        <section className="login_container">
            <h2 tabIndex="0">Iniciar Sección</h2>
            <form className ="login__conteiner--form">
                <input aria-label="correo" className="login__input" type="text" placeholder="Correo Electronico"/>
                <input aria-label="contraseña" className="login__input" type="password" placeholder="contraseña"/>
                <button className="login__button">Iniciar sección</button>
                <div className="login__conteiner--remember-me">
                    <label>
                        <input type="checkbox" name="" id ="cbox1" value="checkbox"/>Recuerdamé
                    </label>
                    <label>
                        <a href="/">Olvidé mi contraseña</a>
                    </label>
                </div>
            </form>
            <section className="login__conteiner--social-media">
                <div><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />Iniciar sección con Google</div>
                <div><img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twetter"/>Iniciar sección con Twetter</div>
            </section>
            <p className="login__conteiner--register">Si no tienes una cuenta  
                <Link to="/register" className = "login__conteiner--registerlink">
                    Registrate
                </Link>
            </p>
        </section>
    </section>
)

export default Login