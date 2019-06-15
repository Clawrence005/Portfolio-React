import React from 'react';
import { Grid } from '@material-ui/core';
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
        <h3><strong>name :{props.name}</strong></h3>
        <p><strong>descrip: {props.description}</strong></p>
        <p><strong>is it deployed :{props.isDeployed}</strong></p>
        {/* if it is deployed use deployed website */}
        <p><strong>website : {props.deployed}</strong></p>
      </div>
    </div>
  )
}


export default Project;