import React, { Component } from 'react';
import './styles.css';
import Banner from '../../components/Banner';
import GalleryPhotoWrapper from '../../containers/GalleryPhotoWrapper';
import Project from '../../components/Project';
import projects from '../../utils/projects.json';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      projects

    }
  }


  handleClick = id => {
    console.log("clicked " + id)
  }


  render() {
    return (
      < div >
        <GalleryPhotoWrapper >
          {
            this.state.projects.map(project => (
              <Project
                handleClick={this.handleClick}
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