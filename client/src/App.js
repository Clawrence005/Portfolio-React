import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPhotoWrapper from './containers/GalleryPhotoWrapper';
import Project from './components/Project';
import Gallery from './pages/Gallery';
import ProjectsPage from './pages/ProjectsPage';
import Nav from './components/Nav';
import SocialMediaFooter from './components/SocialMediaFooter';
import projects from './utils/projects.json';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/projects" component={ProjectsPage} />
          </Switch>
          <SocialMediaFooter />
        </Router >
      </div>
    );
  }
}
export default App;


