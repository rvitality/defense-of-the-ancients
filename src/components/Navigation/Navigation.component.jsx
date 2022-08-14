import React from "react";

import { Nav, NavLink } from "./Navigation.styles.jsx";

const Navigation = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <NavLink to="">News</NavLink>
                </li>
                <li>
                    <NavLink to="heroes">Heroes</NavLink>
                </li>
                <li>
                    <NavLink to="">About</NavLink>
                </li>
            </ul>
        </Nav>
    );
};

export default Navigation;
