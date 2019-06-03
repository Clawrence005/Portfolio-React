import React, { Component } from 'react';
import '../../components/GalleryPhotos';
import './styles.css';
import Banner from '../../components/Banner';
import GalleryPhoto from '../../components/GalleryPhotos';


export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      // message: 'Loading...'
    }
  }

  render() {
    return (
      <div>
        <Banner />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />

      </div>
    );
  }
}