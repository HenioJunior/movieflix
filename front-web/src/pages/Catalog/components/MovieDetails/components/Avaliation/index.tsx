import React from 'react';
import { ReactComponent as Star } from 'core/assets/images/star.svg';
import './styles.scss';

type Props = {
  autorReview?: string;
  textReview?: string;
}

const Avaliation = ({autorReview, textReview}:Props) => {

  return (
      <div>
          <div style={{ display: 'flex' }}>
              <Star className="avaliations-img" />
              <p className="avaliations-name" >{autorReview}</p>
          </div>
          <div style={{ display: 'block' }}>
              <div className="avaliations-form">
              <h3 className="avaliations-text">{textReview}</h3>
              </div>
          </div>
      </div>
  );
};

export default Avaliation;