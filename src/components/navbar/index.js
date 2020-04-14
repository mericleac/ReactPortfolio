import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavBar = ({ routes }) => (
    <StyledNav>
        {routes.map(({ href, label }) => (
            <StyledLink to={href}>{label}</StyledLink>
        ))}
    </StyledNav>
);

const StyledNav = styled.div`
    background: #32292F;
    display: flex;
`;

const StyledLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    background-color: #32292F;
    padding: 15px 10px;
    flex-grow: 1;
    &:hover {
        color: #efefef;
        text-decoration: none;
        background-color: #4a4a4a;
    }
`;

export default NavBar;
export { NavBar };
