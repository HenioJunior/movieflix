import React from 'react'
import { ReactComponent as MainImage} from '../../core/assets/images/main-image.svg';
import LoginCard from './components/LoginCard';
import './styles.scss'; 

const Home = () => (
  <div className="home-container">
    <div className="home-info">
    <h1 className="home-title">Avalie Filmes</h1>
        <p className="home-subtitle">
          Diga o que você achou do seu filme favorito
        </p>
        <MainImage className="main-image" />
    </div>
    <div className="auth-content">
      <LoginCard />
    </div>
  </div>
 );

export default Home;