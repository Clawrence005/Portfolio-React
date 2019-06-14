import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPhotoWrapper from './containers/GalleryPhotoWrapper';
import Project from './components/Project';
import Gallery from './pages/Gallery';
import ProjectsPage from './pages/ProjectsPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
          <NavBar />
          <Switch>
            {/* <Route exact path="/" component={Register} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/projects" component={ProjectsPage} />
          </Switch>

          <Footer />
        </Router >
      </div>
    );
  }
}
export default App;


