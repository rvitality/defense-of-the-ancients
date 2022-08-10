import React from "react";

import { Link } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="">News</Link>
                </li>
                <li>
                    <Link to="heroes">Heroes</Link>
                </li>
                <li>
                    <Link to="">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
