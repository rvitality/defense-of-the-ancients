import styled from "styled-components";

import { Link } from "react-router-dom";

export const Nav = styled.nav`
    ul {
        display: flex;
        align-items: center;
    }
`;

export const NavLink = styled(Link)`
    margin: 0 2rem;
    filter: brightness(80%);
    font-size: 1.25rem;
    transition: filter 0.25s ease-in-out;
    font-family: "Philosopher", sans-serif;

    &:hover {
        filter: brightness(100%);
    }

    @media only screen and (max-width: 56.25em) {
        font-size: 1.7rem;
    } //900px

    @media only screen and (max-width: 26.6em) {
        margin: 0 0 0 3.5rem;
        font-size: 1.8rem;
    } // 425px

    @media only screen and (max-width: 23.44em) {
        font-size: 1.65rem;
        margin: 0 0 0 2.5rem;
    } // 375px
`;
