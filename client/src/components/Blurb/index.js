import React from 'react';
import './styles.css';

function Blurb(props) {
  return (
    <div className="message">
      <p>
        {props.children}
      </p>
    </div>
  );
};

export default Blurb;