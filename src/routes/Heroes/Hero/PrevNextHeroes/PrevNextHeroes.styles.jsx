import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 150px;
    background-color: #111;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 48em) {
        height: auto;
    } //768px
`;

export const Hero = styled(Link)`
    width: 42%;
    // height: 150px;
    height: 10rem;
    position: relative;
    padding: 0px 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 2px 2px 6px #000;
    transition-property: filter, transform;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;

    &:hover {
        filter: brightness(1.2);

        .hero-portrait {
            bottom: 0px;
        }
    }

    &.left {
        justify-content: flex-end;

        .hero-portrait {
            left: 0;
        }
    }

    .hero-portrait {
        position: absolute;
        bottom: -20px;
        // width: 400px;
        width: 26rem;
        right: 0px;
        transition-duration: 0.3s;
        z-index: 1;
    }

    .hero-labels {
        width: 200px;
        min-height: 0;
        display: flex;
        flex-direction: column;
        z-index: 3;
    }

    .top-header {
        font-size: 1.15rem;
        color: #9f9f9f;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 1px 1px 4px #000;
        margin-bottom: 5px;
    }

    .hero-name {
        font-size: 2rem;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-family: "Philosopher", sans-serif;
        font-weight: bold;
        line-height: 112%;
        text-shadow: 1px 1px 4px #000;
    }

    .hero-details {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .primary-attribute {
        width: 1.35rem;
        height: 1.35rem;
        margin-right: 0.8rem;
        filter: drop-shadow(1px 1px 4px black);
    }

    .attack-type {
        color: #ddd;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 1px 1px 4px #000;
    }

    @media only screen and (max-width: 48em) {
        .hero-labels {
            padding: 1rem 1.5rem;
            width: 100%;
            background: rgba(0, 0, 0, 0.7);
        }
    } //768px

    @media only screen and (max-width: 37.5em) {
        width: 38%;

        .top-header {
            display: none;
        }

        .hero-details {
            // display: none;
        }
    } //600px

    @media only screen and (max-width: 26.6em) {
        min-width: 50%;
    } // 425px
`;

export const ViewAllHeroesLink = styled(Link)`
    border: 1px solid;
    text-align: center;
    padding: 1rem;
    font-family: "Philosopher", sans-serif;
    letter-spacing: 2px;
    transition: all 0.15s ease-in-out;
    line-height: 1.5;

    &:hover {
        background: #fff;
        color: #000;
    }

    @media only screen and (max-width: 56.25em) {
        font-size: 1.8rem;
    } //900px

    @media only screen and (max-width: 26.6em) {
        position: absolute;
        top: -40%;
        left: 50%;
        transform: translate(-50%, -50%);
    } // 425px
`;
