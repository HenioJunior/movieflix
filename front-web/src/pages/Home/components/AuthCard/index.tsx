import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../core/ButtonIcon';
import './styles.scss';

const AuthCard = () => {

  return (
    <div className="card-base border-radius-20 auth-card-container">
      <h1 className="auth-card-title">login</h1>
      <div className="home-login-form">
        <input type="email"
              placeholder="Email"
              className="input border-radius-10"
              />
        <input type="password"
              placeholder="Senha"
              className="input border-radius-10"
              />
      </div>
      <Link to="/movies">
        <ButtonIcon text="logar" />
      </Link>

    </div>
  );
}

export default AuthCard; 