import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';
import Header from '../components/Header'

const Register = (props) => { 
    const [form, setValues] = useState(
        {
            email:'',
            name:'',
            lastname:'',
            sex:'',
            birthday:'',
            password:'',
        }
    );
    const handleInput = event => {
        setValues ({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/')
    }
    return (
        <>
            <Header isRegister/>
            <section className="register">
                <section className="register_container">
                    <h2 tabIndex="0">Registrar</h2>
                    <form className ="register__conteiner--form" onSubmit={handleSubmit} >
                        <input name="name" className="register__input" type="text" placeholder="Nombres completos" onChange = {handleInput} />
                        <input name="lastname" className="register__input" type="text" placeholder="Apellidos" onChange = {handleInput}/>
                        <input name="sex" className="register__input" type="text" placeholder="Sexo" onChange = {handleInput}/>
                        <input name="birthday" className="register__input" type="date" onChange = {handleInput}/>
                        <input name="email" className="register__input" type="text" placeholder="example@ani.pe" onChange = {handleInput}/>
                        <input name="password" className="register__input" type="password" placeholder="Contraseña" onChange = {handleInput}/>
                        <button className="register__button">Registrar</button>
                    </form>
                    <Link to="/login" className="register__conteiner--formlink">
                        Iniciar sesión
                    </Link>
                </section>
            </section>
        </>
    )
}
const mapStateToProps =  {
    registerRequest,
};

export default connect (null,mapStateToProps)(Register);