import React from 'react';

function ProjectWrapper(props) {
  return (
    <div className="projectsWrapper">{props.children}</div>
  )
}

export default ProjectWrapper;