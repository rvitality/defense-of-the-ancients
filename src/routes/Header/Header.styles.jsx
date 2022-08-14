import styled from "styled-components";

import ButtonLink from "../../components/ButtonLink/ButtonLink.component";

export const Main = styled.div`
    position: relative;
    z-index: 999;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 5rem;

    @media only screen and (max-width: 26.6em) {
        padding: 0.5rem 2.5rem;
    } // 425px
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7rem;

    @media only screen and (max-width: 26.6em) {
        width: 100%;
        gap: 1rem;
    } // 425px
`;

export const PlayNowButton = styled(ButtonLink)`
    font-size: 0.8rem;
    box-shadow: none;
    padding: 0.6rem 1.6rem;

    @media only screen and (max-width: 26.6em) {
        display: none;
    } // 425px
`;
