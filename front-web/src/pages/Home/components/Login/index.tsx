import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../core/ButtonIcon';
import './styles.scss';

const Login = () => {

  return (
    <div className="card-base border-radius-20 auth-card">
      <h1 className="auth-card-title">login</h1>
      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          className="input-email form-control border-radius-10"
        />
        <input
          type="password"
          placeholder="Senha"
          className="input-password form-control border-radius-10"
        />
      </form>
      <div className="login-submit">
      <ButtonIcon text="logar" />
      </div>
      
      
    </div>
  );
}

export default Login; 