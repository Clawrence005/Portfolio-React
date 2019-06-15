import React, { Component } from 'react';
import '../../containers/ProjectsWrapper';
import Project from '../../components/Project';
import ProjectWrapper from '../../containers/ProjectsWrapper';
import Banner from '../../components/Banner';
import projects from '../../utils/projects.json';
// import skills from '../../utils/skills.json';

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
            />
          ))
          }

        </ProjectWrapper>

      </div>
    )
  }
}


export default ProjectsPage;