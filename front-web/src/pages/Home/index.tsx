import React from 'react'
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import AuthCard from './components/AuthCard';
import './styles.scss';

const Home = () => (
  <div className="home-container">

    <div className="home-info">
      <h1 className="home-info-title">Avalie Filmes</h1>
      <p className="home-info-subtitle">
        Diga o que você achou do seu filme favorito
        </p>
      <MainImage className="main-image" />
    </div>
    <div className="auth-content">
      <AuthCard />
    </div>
  </div>
);

export default Home;