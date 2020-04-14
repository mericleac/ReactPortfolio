import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './index.css';

import { NavBar } from './components';
import content from './content.json';

import HomeView from './views/home';
import ProjectsView from './views/projects';
import SkillsView from './views/skills';

const Index = () => (
  <Router>
      <div>
      <NavBar routes={content.routes} />
      <Switch>
        <Route path="/home">
          <HomeView />
        </Route>
        <Route path="/projects">
          <ProjectsView />
        </Route>
        <Route path="/skills">
          <SkillsView />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById("index"));
