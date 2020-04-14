import React from 'react';
import styled from 'styled-components';

import { Title, Paragraph } from '../../components';
import content from '../../content.json';
import logo from '../../static/images/logo.svg';

const HomeView = () => (
    <StyledDiv>
        <FlexDiv flex="3">
            <Title text={content.title} size={4.5} />
            <StyledHR />
            <Paragraph text={content.description} size={1.2} /> 
        </FlexDiv>
        <FlexDiv flex="2">
            <StyledImage src={logo} alt="Mandy Mericle" />
        </FlexDiv>
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

const FlexDiv = styled.div`
    flex: ${props => props.flex || '1'};
    margin: 20px;
`;

const StyledImage = styled.img`
    width: 100%;
`;

const StyledHR = styled.hr`
    overflow: visible;
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 1px 0 0 0;
    border-radius: 20px;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    &:before {
        display: block;
        content: "";
        height: 30px;
        margin-top: -31px;
        border-style: solid;
        border-color: black;
        border-width: 0 0 1px 0;
        border-radius: 20px;
    }
`;

export default HomeView;
export { HomeView };
