import React from 'react';
import './Spinner.css';

const Spinner = () =>
  <div className="Spinner">
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    <h4>Loading...</h4>
  </div>

export default Spinner;