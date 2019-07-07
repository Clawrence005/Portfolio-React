import React from 'react';

function LandingSegment(props) {
  return (
    <div className="landing-container">
      {props.children}
    </div>

  );
}

export default LandingSegment;