import React from "react";

const NavBar = ({ routes }) => (
    <div>
        {routes.map(({ href, label }) => (
            <a href={href}>{label}</a>
        ))}
    </div>
);

export default NavBar;
export { NavBar };
