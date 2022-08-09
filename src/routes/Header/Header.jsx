import React from "react";
import { Outlet } from "react-router-dom";
import ButtonLink from "../../components/ButtonLink/ButtonLink.component";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";

import "./Header.scss";

const Header = () => {
    return (
        <>
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
            <Outlet />
        </>
    );
};

export default Header;
