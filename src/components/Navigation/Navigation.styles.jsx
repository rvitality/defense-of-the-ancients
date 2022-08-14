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
`;
