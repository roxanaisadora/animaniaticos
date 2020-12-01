import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section class="register">
        <section class="register_container">
            <h2 tabIndex="0">Registrar</h2>
            <form class ="register__conteiner--form">
                <input aria-label="nombres" class="register__input" type="text" placeholder="Nombres completos"/>
                <input aria-label="apellido" class="register__input" type="text" placeholder="Apellidos"/>
                <input aria-label="sexo" class="register__input" type="text" placeholder="Sexo"/>
                <input aria-label="cumpleaños" class="register__input" type="date" placeholder="Nombres completos"/>
                <input aria-label="correo" class="register__input" type="text" placeholder="Correo Electronico"/>
                <input aria-label="contraseña" class="register__input" type="password" placeholder="Contraseña"/>
                <button class="register__button">Registrar</button>
            </form>
        </section>
    </section>

)

export default Register;