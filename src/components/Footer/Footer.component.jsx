import React from "react";

import {
    FooterSection,
    FooterLogoContainer,
    FooterLogo,
    FooterNav,
    Copyright,
    CopyrightLogoContainer,
} from "./Footer.styles";

const Footer = () => {
    return (
        <FooterSection>
            <FooterNav>
                <ul>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="#">Heroes</a>
                    </li>
                    <li>
                        <a href="#">Radiant Region</a>
                    </li>
                    <li>
                        <a href="#">Dire Region</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Email</a>
                    </li>
                </ul>
            </FooterNav>

            <CopyrightLogoContainer>
                <FooterLogoContainer>
                    <FooterLogo
                        url={
                            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png"
                        }
                        href="#"
                    />
                    <FooterLogo
                        url={
                            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
                        }
                        href="#"
                    />
                </FooterLogoContainer>
                <Copyright>
                    <p>
                        Dota and the Dota logo are trademarks and/or registered trademarks of Valve
                        Corporation. 2022 Valve Corporation, All rights reserved.
                    </p>
                </Copyright>
            </CopyrightLogoContainer>
        </FooterSection>
    );
};

export default Footer;
