import React from 'react';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg'
import './styles.scss';

const LoginCard = () => {


    return (
        <div className='login-card-container'>
            <h1 className='login-card-title'>LOGIN</h1>
            <form className='login-form'>
                <div className=''>
                    <input
                        type="email"
                        placeholder='Email'
                        className="input-email"
                        name="username"
                    />
                </div>
                <div className=''>
                    <input
                        type="password"
                        placeholder='Senha'
                        className="input-password"
                        name="password"
                    />
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