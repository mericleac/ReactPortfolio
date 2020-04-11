import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ routes }) => (
    <div>
        {routes.map(({ href, label }) => (
            <Link to={href}>{label}</Link>
        ))}
    </div>
);

export default NavBar;
export { NavBar };
