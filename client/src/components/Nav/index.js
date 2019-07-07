import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

export class Nav extends Component {
state={
  activeStyle: false,
}


 render() {
  return (
    <nav className='nav-bar'>
      <p className='nav-name' style={{ color: 'white' }}>COLIN LAWRENCE</p>

      <Link to="/gallery" className='nav-link' style={{ textDecorationLine: 'none' }} activeStyle={{ textDecorationLine: 'line-through' }}>GALLERY</Link>
      <Link to="/projects" className='nav-link' style={{ textDecorationLine: 'none' }} activeStyle={{ textDecorationLine: 'line-through' }}>PROJECTS</Link>
      <Link to="/" className='nav-link' style={{ textDecorationLine: 'none' }} activeStyle={{ textDecorationLine: 'line-through' }}>HOME</Link>
    </nav >
  );
}
}

export default Nav;
