import React, { Component } from 'react';
import '../../containers/ProjectsWrapper';
import Project from '../../components/Project';
import ProjectWrapper from '../../containers/ProjectsWrapper';
import { Grid } from '@material-ui/core';
import Banner from '../../components/Banner';
import projects from '../../utils/projects.json';
// import skills from '../../utils/skills.json';
import './styles.css';

// const skills = [
//   "HTML",
//   "CSS",
//   "Javascript",
//   "Jquery",
//   "NodeJs",
//   "Firebase",
//   "Express",
//   "MySQL",
//   "MongoDB",
//   "Handlebars",
//   "PassportJs",
//   "React",
//   "Bootstrap",
//   "Material UI",
//   "Materialize",
//   "Fusion 360",
//   "Rhino",
//   "Photoshop",
//   "Illustrator",
//   "SVG",
//   "Sketchup",
//   "Aspire"
// ];

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      projects,
    }
  }

  // deployedSite = (props) => {
  //   const isDeployed = props.isDeployed;
  //   if (isDeployed) {
  //     return <p>{this.props.deployed}</p>;
  //   }
  //   return <p>nothing</p>
  // }


  handleClick = id => {

    console.log('clicked' + id)
  }
  render() {
    return (
      <div>
        <Banner>Projects</Banner>
        <ProjectWrapper>
          {this.state.projects.map(project => (
            <Project

              onClick={this.handleClick}
              key={project.id}
              id={projects.id}
              image={project.image}
              name={project.name}
              description={project.description}
              isDeployed={project.isDeployed}
              deployed={project.deployed}
              github={project.github}

            />

          ))
          }
        </ProjectWrapper>

      </div>
    )
  }
}


export default ProjectsPage;