import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import './index.css';

import HomeView from './views/home';
import ProjectsView from './views/projects';
import SkillsView from './views/skills';

import { Title } from './components';

import projects from './static/images/projects.svg';
import resume from './static/images/resume.svg';

const Index = () => (
  <div>
    <ViewContainer height="80">
      <HomeView />
    </ViewContainer>
    <ViewContainer height="20" align="center">
      <Button className="hvr-bubble-bottom">See More</Button>
    </ViewContainer>
    <ViewContainer height="100">
    <Container>
      <BorderBox flex="2" />
      <BorderBox right bottom />
      <BorderBox flex="2" right />
      <BorderBox bottom />
      <BorderBox flex="2" />
    </Container>
    <Container>
      <BorderBox right />
      <BorderBox flex="2" right />
      <BorderBox />
    </Container>
    <Container topMargin="10" align="center">
      <BorderBox>
        <CircleDiv>
          <CircleImage src={projects} alt="Projects" />
        </CircleDiv>
        <Title size={1.5} text="Projects" />
      </BorderBox>
      <BorderBox>
        <CircleDiv>
          <CircleImage src={resume} alt="Skills" />
        </CircleDiv>
        <Title size={1.5} text="Skills" />
      </BorderBox>
    </Container>
    </ViewContainer>
    <ProjectsView />
    <SkillsView />
  </div>
);

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => props.height + 'vh' || 'auto'};
  background-color: ${props => props.color || 'white'};
  width: 100%;
  text-align: center;
  text-align: ${props => props.align || 'left'};
`;

const Container = styled.div`
    display: flex;
    height: 20vh;
    ${props => props.topMargin ? `margin-top: ${props.topMargin}px;` : ''}
    text-align: ${props => props.align || 'left'};
`;

const BorderBox = styled.div`
    flex: ${props => props.flex || '1'};
    ${props => props.right ? 'border-right: 2px solid black;' : ''}
    ${props => props.bottom ? 'border-bottom: 2px solid black;' : ''}
`;

const CircleDiv = styled.div`
    height: 105px;
    width: 105px;
    text-align: center;
    display: inline-block;
    border: 2px solid black;
    border-radius: 50%;
    margin: 10px 0px;
`;

const CircleImage = styled.img`
    display: inline-block;
    height: 100%;
    width: 65px;
`;

const Button = styled.button`
    width: 20%;
    margin: auto;
    border: none;
    background-color: #17a2b8;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    &:before {
        pointer-events: none;
        position: absolute;
        z-index: -1;
        content: '';
        border-style: solid;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        left: calc(50% - 10px);
        bottom: 0;
        border-width: 10px 10px 0 10px;
        border-color: #17a2b8 transparent transparent transparent;
    }
    &:hover:before, &:focus:before, &:active:before {
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
    }
`;

ReactDOM.render(<Index />, document.getElementById("index"));
