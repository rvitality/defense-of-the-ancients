import React from "react";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#heroes">Heroes</a>
                </li>
                <li>
                    <a href="#pro-circuit">Pro Circuit</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
