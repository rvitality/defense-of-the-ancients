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
`;

export const Hero = styled(Link)`
    width: 42%;
    height: 150px;
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
        width: 400px;
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
        font-size: 15px;
        color: #9f9f9f;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 1px 1px 4px #000;
        margin-bottom: 5px;
    }

    .hero-name {
        font-size: 28px;
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
        width: 20px;
        height: 20px;
        margin-right: 10px;
        filter: drop-shadow(1px 1px 4px black);
    }

    .attack-type {
        color: #ddd;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 1px 1px 4px #000;
    }
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
`;
