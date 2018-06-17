import React from 'react';
import './Loading.css';

const Loading = () => (
  <div>
  <div className="spinner">
    <div className="double-bounce1" />
    <div className="double-bounce2" />
  </div>
  <h1>Once these circle disappear, start scrolling!</h1>
  </div>
);

export default Loading;
