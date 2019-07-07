import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

function SocialMediaFooter() {
    return (
        <div className='footer'>
            <p> Copyright 2019</p>
            <Link to='#' className='footer-link' style={{ color: 'white' }} activeStyle={{ color: 'red' }}>DRIBBLE</Link>
            <a href="https://www.instagram.com/foulbitepress/" className='footer-link' style={{ color: 'white' }} activeStyle={{ color: 'red' }}>INSTAGRAM</a>
            <a href="https://www.linkedin.com/in/colin-lawrence-536220176/" className='footer-link' style={{ color: 'white' }} activeStyle={{ color: 'red' }}>LINKEDIN</a>
        </div >
    );
}

export default SocialMediaFooter;
