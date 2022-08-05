import React from "react";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="#news">News</a>
                </li>
                <li>
                    <a href="#heroes">Heroes</a>
                </li>
                <li>
                    <a href="#download">Download</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
