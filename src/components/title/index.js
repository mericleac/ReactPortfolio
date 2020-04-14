import React from "react";
import styled from "styled-components";

const Title = ({ text, size }) => (
    <StyledHeader size={size}>{text}</StyledHeader>
);

const StyledHeader = styled.h1`
    font-family: 'Merienda One', cursive;
    font-size: ${props => props.size || '2.5'}rem;
`;

export default Title;
export { Title };
