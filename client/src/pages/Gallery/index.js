import React, { Component } from 'react';
import './styles.css';
import Banner from '../../components/Banner';
import GalleryPhotoWrapper from '../../containers/GalleryPhotoWrapper';
import Project from '../../components/Project';
import projects from '../../utils/projects.json';
import skills from '../../utils/skills.json';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      projects,
      skills,

    }
  }


  handleClick = id => {
    console.log("clicked " + id)
    // when clicked link to url
  }


  render() {

    // const isDeployed = this.state.isDeployed;
    //from items.isDeployed

    // if (isDeployed) {
    //render deployed url
    // button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //just render the git hub
    // button = <LoginButton onClick={this.handleLoginClick} />;
    // }
    return (
      < div >
        <GalleryPhotoWrapper >
          {
            this.state.projects.map(project => (
              <Project
                onClick={this.handleClick}
                key={project.id}
                id={project.id}
                image={project.image}
                name={project.name}
                description={project.description}
              />
            ))
          }
        </GalleryPhotoWrapper>
      </div >
    );
  }
}

export default Gallery;