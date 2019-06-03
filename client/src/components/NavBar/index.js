import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

const HomeLink = props => <Link to="/" {...props} />
const ProjectsLink = props => <Link to="/projects" {...props} />
const GalleryLink = props => <Link to="/Gallery" {...props} />

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>COLIN CHAVEZ LAWRENCE
          </Typography>
          <Button color="inherit" component={HomeLink}>Home</Button>
          <Button color="inherit" component={ProjectsLink}>Projects</Button>
          <Button color="inherit" component={GalleryLink}>Gallery</Button>
        </Toolbar>
      </AppBar>
    </div >
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
