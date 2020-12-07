import React, {useState} from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions'
import {Link} from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import Header from '../components/Header'

const Login = props => {
    const [form, setValues] = useState({
        email:'',
    })
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }
    return (
        <>
            <Header isLogin/>
            <section className="login">
                <section className="login_container">
                    <h2 tabIndex="0">Iniciar Sección</h2>
                    <form className ="login__conteiner--form" onSubmit={handleSubmit}>
                        <input 
                            name="email" 
                            className="login__input" 
                            type="text" 
                            placeholder="Correo Electronico"
                            onChange={handleInput}
                        />
                        <input 
                            name="password" 
                            className="login__input" 
                            type="password" 
                            placeholder="contraseña"
                            onChange={handleInput}
                        />
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
        </>
    );
};
const mapStateToProps =  {
    loginRequest,
};
export default connect(null,mapStateToProps)(Login)

