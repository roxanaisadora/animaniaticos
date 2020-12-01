import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section className="register">
        <section className="register_container">
            <h2 tabIndex="0">Registrar</h2>
            <form className ="register__conteiner--form">
                <input aria-label="nombres" className="register__input" type="text" placeholder="Nombres completos"/>
                <input aria-label="apellido" className="register__input" type="text" placeholder="Apellidos"/>
                <input aria-label="sexo" className="register__input" type="text" placeholder="Sexo"/>
                <input aria-label="cumpleaños" className="register__input" type="date" placeholder="Nombres completos"/>
                <input aria-label="correo" className="register__input" type="text" placeholder="Correo Electronico"/>
                <input aria-label="contraseña" className="register__input" type="password" placeholder="Contraseña"/>
                <button className="register__button">Registrar</button>
            </form>
            <Link to="/login" className="register__conteiner--formlink">
                Iniciar sesión
            </Link>
        </section>
    </section>

)

export default Register;