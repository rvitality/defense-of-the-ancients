import styled from "styled-components";

export const FooterSection = styled.footer`
    position: relative;
    padding: 3rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: flex;
    justify-content: center;
    gap: 10vw;
    z-index: 9;
    background: #000;
`;

export const FooterNav = styled.div`
    // width: 50%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5rem;

    ul {
        li a {
            color: #777;
            transition: color 0.15s ease-in-out;

            &:hover {
                color: #fff;
            }
        }

        li:first-of-type a {
            font-family: "Philosopher", sans-serif;
            font-size: 1.35rem;
            margin-bottom: 1rem;
            display: inline-block;
            color: #fff;
        }
    }
`;

export const CopyrightLogoContainer = styled.div`
    width: 40%;
`;

export const FooterLogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    // gap: 2rem;
`;

export const FooterLogo = styled.a`
    display: flex;
    background: url(${props => props.url});
    width: 100%;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    transition: filter 0.25s ease-in-out;
    filter: brightness(80%);
    margin: 0 1rem 1rem 1rem;

    &:hover {
        filter: brightness(100%);
    }
`;

export const Copyright = styled.div`
    // width: 40%;
    text-align: center;
    margin: 1rem 0;

    p {
        font-size: 0.8rem;
        color: #777;
    }
`;
