import React from 'react';
import portrait from '../../assets/portrait.jpg';

function Portrait() {
    return (
        <div className="portrait-container">
            <img src={portrait} alt="portrait" className="portrait" />
        </div>
    );
}

export default Portrait;