import React from 'react';
import { Grid } from '@material-ui/core';
import logo5 from '../../assets/logo5.svg';
import './styles.css';

function Project(props) {
  return (
    <div className="imageContainer">
      <img
        key={props.id}
        src={props.image}
        alt={"image-" + props.id}
        id={props.id}
        height="190px"
        width="190px"
      />
      <div className="div-content">
        <h3><strong>{props.name}</strong></h3>
        <p><strong>{props.name}</strong></p>
      </div>
    </div>
  )
}


export default Project;