import styled from "styled-components";

import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
    display: inline-block;
    background-image: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png");
    width: 10rem;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    transition: filter 0.25s ease-in-out;
    filter: brightness(80%);

    &:hover {
        filter: brightness(100%);
    }

    @media only screen and (max-width: 56.25em) {
        width: 12rem;
    } //900px

    @media only screen and (max-width: 26.6em) {
        width: 14rem;
    } // 425px

    @media only screen and (max-width: 23.44em) {
        width: 16rem;
    } // 375px
`;
