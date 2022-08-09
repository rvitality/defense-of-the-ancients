import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeroesContainer = styled.div`
    margin-top: -15vh;
    padding: 20vh 5rem 1rem 5rem;
    text-align: center;
    background-image: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    position: relative;

    .heading-p {
        margin: 1rem auto;
        max-width: 70%;
    }
`;

export const FilterBlock = styled.div`
    font-family: "Philosopher", sans-serif;
    max-width: 100%;
    margin: 3rem auto;
    padding: 1rem 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #11111190;
    box-shadow: 0px 0px 30px #00000050;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));

    .filter-heading {
        font-size: 1.35rem;
        letter-spacing: 1px;
    }
`;

export const AttributeContainer = styled.div`
    display: flex;
    align-items: center;

    .attribute-word {
        color: #808fa6;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-right: 1.25rem;
    }
`;

export const Attribute = styled.div`
    background-image: url(${props => props.bgURL});
    width: 43px;
    height: 35px;
    margin-left: -4px;
    background-size: cover;
    background-repeat: no-repeat;
    transition-property: filter;
    transition-timing-function: ease-in-out;
    transition-duration: 0.1s;
    cursor: pointer;
    color: #fff;
    filter: brightness(0.5) saturate(0);
    cursor: pointer;

    &:hover {
        filter: brightness(1) saturate(1);
    }
`;

export const SearchHeroForm = styled.form`
    width: 25%;
    height: 3rem;

    background-color: #25282a;
    display: flex;
    flex-direction: row;
    align-items: center;

    .form-control {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding-left: 1rem;
    }

    input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-size: 1rem;
    }

    svg {
        width: 26px;
        height: 26px;
        min-width: 26px;
        min-height: 26px;
        margin-right: 10px;
        margin-left: 10px;
        background-size: cover;
        background-repeat: no-repeat;
    }
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
`;

export const HeroLink = styled(Link)`
    position: relative;
    display: inline-flex;
    background-image: ${props => `url(${props.bgimageurl})`};

    // min-width: 255px;
    // width: 225px;
    // height: 127px;

    background-size: cover;

    width: 84px;
    height: 94px;

    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0 1px 1px 1px #000, inset 0 0 1rem rgba(0, 0, 0, 0.8);
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: scale(1.1);
        z-index: 9;

        ${HeroName} {
            opacity: 1;
        }
    }
`;

export const HeroesBlockContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

export const HeroesBlock = styled.div`
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
`;

export const HeroesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
`;
