import React, { Component } from 'react';
import '../../containers/ProjectsWrapper';
import Project from '../../components/Project';
import projects from '../../utils/projects.json';
import ProjectWrapper from '../../containers/ProjectsWrapper';

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      projects
    }
  }
  handleClick = id => {

    console.log('clicked' + id)
  }
  render() {
    return (
      <div>
        <ProjectWrapper>
          {this.state.projects.map(project => (
            <Project
              onClick={this.handleClick}
              key={project.id}
              id={projects.id}
              image={project.image}
              name={project.name}
              description={project.description}
            />
          ))
          }
        </ProjectWrapper>
      </div>
    )
  }
}


export default ProjectsPage;