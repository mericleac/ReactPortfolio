import React from 'react';
import styled from 'styled-components';

import { ProjectCardDeck } from '../../components';
import content from '../../content.json';

const ProjectsView = () => (
    <StyledDiv>
        <ProjectCardDeck projectList={content.projects} />
    </StyledDiv>
);

const StyledDiv = styled.div`
    display: flex;
    background-color: #F4F4ED;
    border-radius: 10px;
    min-height: 60vh;
    margin: 20px;
    padding: 30px;
`;

export default ProjectsView;
export { ProjectsView };
