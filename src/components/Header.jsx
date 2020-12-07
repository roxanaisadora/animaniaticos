import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar'
import {logoutRequest} from '../actions'
import '../assets/styles/components/Header.scss';
import usuario from "../assets/static/usuario3.png";

const Header = props => {
    const {user, isLogin, isRegister} = props;
    const hasUser = Object.keys(user).length > 0;
    const handleLogout = () => {
        props.logoutRequest({});
    }
    const headerClass= classNames('header', {
        isLogin, 
        isRegister,
    })
    return (
        <header className={headerClass} > 
            <Link to="/">
                <img className="header__img" src="https://i.ibb.co/hVbX6xZ/logo-anime.png" alt="logo"/>
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        hasUser ?
                        <img src={gravatar(user.email)} alt={user.email} />
                        :<img  src={usuario} alt="user"/>
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {
                        hasUser ?
                        <li><a href="/">{user.name}</a></li>
                        : null
                    }
                    {
                        hasUser ?
                        <li><a href="#logout" onClick={handleLogout} >Cerrar sesión</a></li>    
                        :<li>
                        <Link to="/login">
                            Iniciar sesión
                        </Link>
                    </li>
                    }
                </ul>
            </div>
    </header>
    );
}

Header.propTypes = {
    user: PropTypes.object
  }

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);