import React from "react";

import ButtonLink from "../ButtonLink/ButtonLink.component";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__nav-container">
                <Logo />
                <Navigation />
            </div>
            <ButtonLink
                className="header__playnow"
                title="Play Now"
                url="https://store.steampowered.com/app/570/Dota_2/"
            />
        </header>
    );
};

export default Header;
