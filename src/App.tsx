import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Music from './Music';
import './css/app.css';
import Home from './Home';
import Contact from './Contact';
import Lessons from './Lessons';
import Projects from './Projects';
import { Container } from 'react-bootstrap';

function App() {
  const HeaderWithRouter = withRouter(Header);

  return (
    <Container
      fluid
      className='page-container vh-100 p-0 d-flex flex-column justify-content-between'
    >
      <Router>
        <HeaderWithRouter />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/music' component={Music} />
          <Route path='/projects' component={Projects} />
          <Route path='/lessons' component={Lessons} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
