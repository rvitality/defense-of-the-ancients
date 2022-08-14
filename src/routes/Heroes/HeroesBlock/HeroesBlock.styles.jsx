import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeroesGroupContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

export const HeroesGroup = styled.div`
    position: relative;
    display: flex;

    .secondary-heading {
        left: -30px;
        position: absolute;
        top: 50%;
        line-height: 0;
        text-align: center;
        font-weight: 700;
        -ms-transform: translateX(-50%) rotate(90deg);
        -webkit-transform: translateX(-50%) rotate(90deg);
        -o-transform: translateX(-50%) rotate(-90deg);
        transform: translateX(-50%) rotate(-90deg);
        white-space: nowrap;
        z-index: 999;
        text-align: center;
        text-transform: uppercase;
        font-weight: lighter;
        font-family: "Philosopher", sans-serif;
        letter-spacing: 0.4rem;
    }

    @media only screen and (max-width: 37.5em) {
        .secondary-heading {
            font-size: 2rem;
            left: -20px;
        }
    } //600px

    @media only screen and (max-width: 26.6em) {
        flex-direction: column;

        .secondary-heading {
            position: relative;
            transform: rotate(0);
            left: unset;
            top: unset;
            margin: 1.5rem 0 4rem 0;
        }
    } // 425px
`;

export const HeroesGroupGrid = styled.div`
    gap: 0.5rem;

    width: 100%;
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    grid-auto-columns: auto;

    @media only screen and (max-width: 56.25em) {
        grid-template-columns: repeat(8, 1fr);
    } //900px

    @media only screen and (max-width: 37.5em) {
        grid-template-columns: repeat(5, 1fr);
    } //600px

    @media only screen and (max-width: 26.6em) {
        grid-template-columns: repeat(4, 1fr);
    } // 425px

    @media only screen and (max-width: 23.44em) {
        grid-template-columns: repeat(3, 1fr);
    } // 375px
`;

export const HeroName = styled.span`
    text-transform: capitalize;
    position: absolute;
    z-index: 99;
    padding: 0.5rem 0.8rem;
    border-radius: 0.3rem;
    background: #233;
    color: #fff;
    transition: all 0.25s ease-in-out;
    opacity: 0;
    box-shadow: inset 0 0 1rem rgb(10 10 10 / 75%);
    width: max-content;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 37.5em) {
        font-size: 2rem;
    } //600px
`;

export const HeroLink = styled(Link)`
    position: relative;
    display: inline-flex;
    background-image: ${props => `url(${props.bgimageurl})`};

    background-size: cover;

    height: 98px;

    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0 1px 1px 1px #000, inset 0 0 1rem rgba(0, 0, 0, 0.8);
    transition: all 0.2s ease-in-out;

    &.no-match {
        filter: brightness(0.25);
    }

    &:hover {
        transform: scale(1.1);
        z-index: 9;

        ${HeroName} {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 26.6em) {
        height: 80px;
    } // 425px
`;
