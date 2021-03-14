import { truncate } from 'node:fs';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ButtonIcon from '../../../../core/ButtonIcon';
import { makerLogin } from '../../../../core/utils/request';
import './styles.scss';

type FormData = {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [hasError, setHasError] = useState(false);

  const onSubmit = (data: FormData) => {
    makerLogin(data)
      .then(response => {
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
      })
  }

  return (
    <div className="card-base border-radius-20 auth-card">
      <h1 className="auth-card-title">login</h1>
       {hasError && (
          <div className="alert alert-danger login-alert">
          Usuário ou senha inválidos
        </div>
       )}
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="input-email form-control border-radius-10"
          placeholder="Email"
          name="username"
          ref={register({ required: true})}
        />
        <input
          type="password"
          className="input-password form-control border-radius-10"
          placeholder="Senha"
          name="password"
          ref={register({ required: true, minLength: 5})}
        />
        <div className="login-submit">
          <ButtonIcon text="logar" />
        </div>
      </form>
    </div>
  );
}

export default Login;