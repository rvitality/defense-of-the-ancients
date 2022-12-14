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

    @media only screen and (max-width: 26.6em) {
        flex-direction: column;
        padding: 2.5rem;
    } // 425px
`;

export const FooterNav = styled.div`
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

    @media only screen and (max-width: 56.25em) {
        ul li a {
            font-size: 1.3rem;
        }

        ul li:first-of-type a {
            font-size: 1.7rem;
        }
    } //900px

    @media only screen and (max-width: 26.6em) {
        ul li a {
            font-size: 1.5rem;
        }

        ul li:first-of-type a {
            font-size: 2rem;
        }
    } // 425px
`;

export const CopyrightLogoContainer = styled.div`
    width: 40%;

    @media only screen and (max-width: 26.6em) {
        width: 100%;
    } // 425px
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

    @media only screen and (max-width: 56.25em) {
        p {
            font-size: 1.1rem;
        }
    } //900px
`;
