import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';

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
      <StyledDiv>
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
      </StyledDiv>
    </div>
  </Router>
);

const StyledDiv = styled.div`
    display: flex;
    background-color: #F4F4ED;
    border-radius: 10px;
    min-height: 60vh;
    margin: 20px;
    padding: 30px;
`;

ReactDOM.render(<Index />, document.getElementById("index"));
