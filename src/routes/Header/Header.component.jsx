import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../../components/Navigation/Navigation.component";
import Logo from "../../components/Logo/Logo.component";
import ButtonLink from "../../components/ButtonLink/ButtonLink.component";

import { Main, NavContainer, PlayNowButton } from "./Header.styles.jsx";

const Header = () => {
    return (
        <>
            <Main>
                <NavContainer>
                    <Logo />
                    <Navigation />
                </NavContainer>
                <PlayNowButton
                    title="Play Now"
                    url="https://store.steampowered.com/app/570/Dota_2/"
                />
            </Main>
            <Outlet />
        </>
    );
};

export default Header;
