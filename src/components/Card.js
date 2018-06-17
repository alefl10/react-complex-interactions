import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => (
  <LazyLoad height={650} offset={-100}>
    <div className={props.card.animation}>
      <div className="front" onClick={() => props.showBack(props.card)}>
        <img src="juice.jpg" alt="Vitamine Juice" className="card-image" />
        <div className="container">
          <h3>Vitamine Juice <span className="price">$24.99</span></h3>
          <p>Need a jum on your vitimins while drinking?
            Tired of popping pills? Drink our vitamin enhanced juice, available in severalflavors
          </p>
        </div>
      </div>
      <div className="container-back back" onClick={() => props.showFront(props.card)}>
        <h3>Vitamine Juice <span className="price">$24.99</span></h3>
        <p>{props.card.description}</p>
      </div>
    </div>
  </LazyLoad>
);

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    animation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  showBack: PropTypes.func.isRequired,
  showFront: PropTypes.func.isRequired,
};

export default Card;
