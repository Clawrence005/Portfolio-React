import React from 'react';
import { Grid } from '@material-ui/core';
import './styles.css';

function Project(props) {

  // setHover = () => this.setState({ hovered: true });
  // cancelHover = () => this.setState({ hovered: false });
  return (
    // <Grid item xs={11} sm={5} md={4} lg={4} className="image-grid" >
    <div className="project-main-div">
      <div className="image-container"
      // onMouseOver={this.setHover}
      //   onMouseOut={this.cancelHover}
      >
        <img className="image"
          key={props.id}
          src={props.image}
          alt={"image-" + props.id}
          id={props.id}
        />
      </div>
      <div className="image-content" >
        <h3><strong>name :{props.name}</strong></h3>
        <p><strong>descrip: {props.description}</strong></p>
        <p><strong>is it deployed :{props.isDeployed ? 'props.deployed' : "no"}</strong></p>
        {/* if it is deployed use deployed website */}
        <p><strong>
          github : <a href={`${props.github}`} target="_blank" rel="noopener noreferrer" >Github</a>
        </strong></p>
        <p><strong>website : {props.isDeployed ? <a href={`${props.deployed}`}>Link to Deployed Website</a> : "not deployed"}</strong></p>
        <div>
          This project is <b>{props.isDeployed ? 'currently' : 'not'}</b> deployed.
    </div>
      </div>
    </div>

  )
}


export default Project;