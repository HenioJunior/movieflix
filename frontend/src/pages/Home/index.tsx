import React from 'react'
import { ReactComponent as MainImage} from '../../core/assets/images/main-image.svg';
import './styles.scss'; 

const Home = () => (
  <div className="home-container">
    <div className="row home-content card-base border-radius-20">
      <div className="col-6 home-text">
        <h1 className="class-title">Avalie Filmes</h1>
        <p className="text-subtitle">
          Diga o que você achou do seu filme favorito
        </p>
        <MainImage className="main-image" />
      </div>
      <div className="col-6">
       <h1>Login</h1>
      </div>
    </div>
  </div>

);

export default Home;