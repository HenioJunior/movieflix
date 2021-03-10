import React from 'react';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg'
import { useForm } from 'react-hook-form';
import { makeLogin } from '../../../../core/utils/request';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveSessionData } from '../../../../core/utils/auth';
import './styles.scss';

type FormData = {
  username: string;
  password: string;
}


const LoginCard = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  const onSubmit = (data: FormData) => {
      makeLogin(data)
          .then(response => {
              setHasError(false)
              saveSessionData(response.data)
              history.push('/catalog');
          })
          .catch(() => {
              setHasError(true);
          })
  };
  return (
      <div className='login-card-container'>
          <h1 className='login-card-title'>LOGIN</h1>
          {hasError && (
              <div className='login-alert'>
                  Usuario ou senha inválidos !
              </div>
          )}
          <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
              <div className=''>
                  <input
                      type="email"
                      placeholder='Email'
                      className={`input-email ${errors.username ? 'is-invalid' : ''} `}
                      name="username" 
                      ref={register({
                          required: "Campo obrigatório",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email inválido"
                          }
                        })} />
                  {errors.username && (
                      <div className="error-feedback">
                          {errors.username.message}
                      </div>
                  )}
              </div>
              <div className=''>
                  <input
                      type="password"
                      placeholder='Senha'
                      className={`input-password ${errors.password ? 'is-invalid' : ''} `}
                      name="password" ref={register({ required: "Campo obrigatório"})} />
                  {errors.password && (
                      <div className="error-feedback">
                         {errors.password.message}
                      </div>
                  )}
              </div>
              <div className='button-content'>
                  <button className='button-icon'>
                      <h3 className='title-btn'>LOGAR</h3>
                  </button>
                  <div className='button-arrow'>
                      <ArrowIcon />
                  </div>
              </div>
          </form>
      </div>
  );
}

export default LoginCard;