import React from 'react';

function ProjectWrapper(props) {
  return (
    <div className="projects-wrapper">{props.children}</div>
  )
}

export default ProjectWrapper;