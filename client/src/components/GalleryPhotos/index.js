import React from 'react';
import { Grid } from '@material-ui/core';
import logo5 from '../../assets/logo5.svg';

function GalleryPhoto(props) {

  return (
    <Grid item xs={12} md={4}>
      <img src={logo5} alt="Logo" />

    </Grid>
  );
}

export default GalleryPhoto;