import React from 'react';
import { useForm } from "react-hook-form";
import ButtonIcon from '../../../../core/ButtonIcon';
import './styles.scss';

type FormData = {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  return (
    <div className="card-base border-radius-20 auth-card">
      <h1 className="auth-card-title">login</h1>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="input-email form-control border-radius-10"
          placeholder="Email"
          name="email"
          ref={register}
        />
        <input
          type="password"
          className="input-password form-control border-radius-10"
          placeholder="Senha"
          name="password"
          ref={register}
        />
        <div className="login-submit">
          <ButtonIcon text="logar" />
        </div>
      </form>
    </div>
  );
}

export default Login;