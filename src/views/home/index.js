import React from 'react';
import styled from 'styled-components';

import { Title, Paragraph } from '../../components';
import content from '../../content.json';
import logo from '../../static/images/logo.svg';

import linkedIn from '../../static/images/linkedIn.svg';
import fiverr from '../../static/images/fiverr.svg';
import upwork from '../../static/images/upwork.svg';
import twitter from '../../static/images/twitter.svg';

import '../../index.css';

const HomeView = () => (
    <div>
        <Main>
            <FlexDiv flex="3">
                <Title text={content.title} size={4} />
                <StyledHR />
                <Paragraph text={content.description} size={1.2} />
                <SocialMediaLinkContainer>
                    <a href={content.socialMedia.linkedIn}><SocialMediaLink src={linkedIn} alt="LinkedIn" /></a>
                    <a href={content.socialMedia.fiverr}><SocialMediaLink src={fiverr} alt="Fiverr" /></a>
                    <a href={content.socialMedia.upwork}><SocialMediaLink src={upwork} href={content.socialMedia.upwork} alt="Upwork" /></a>
                    <a href={content.socialMedia.twitter}><SocialMediaLink src={twitter} href={content.socialMedia.twitter} alt="Twitter" /></a>
                </SocialMediaLinkContainer>
            </FlexDiv>
            <FlexDiv flex="2">
                <StyledImage src={logo} alt="Mandy Mericle" />
            </FlexDiv>
        </Main>
    </div>
);

const Main = styled.div`
    display: flex;
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

const SocialMediaLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SocialMediaLink = styled.img`
    width: 60px;
`;

export default HomeView;
export { HomeView };
