import styled, { keyframes } from "styled-components";

const lefty = keyframes`
    0%{transform:translateX(0px)}
    100%{transform:translateX(-50%)}
`;

export const HeroesList = styled.div`
    width: 14000px;
    animation-duration: 150s;
    animation-direction: normal;

    display: flex;
    flex-direction: row;
    align-items: center;
    height: 138px;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ${lefty};

    &:nth-child(2) {
        animation-direction: reverse;
    }

    &:nth-child(4) {
        animation-direction: reverse;
    }

    div img {
        height: 100%;
    }
`;

export const HeroCard = styled.a`
    background-image: ${props => `url(${props.backgroundImageUrl})`};
    min-width: 255px;
    width: 225px;
    height: 127px;
    margin-right: 10px;
    box-shadow: 1px 1px 4px #000;
    transition-property: transform, box-shadow, background-size, opacity, top, left;
    transition-timing-function: ease-out;
    transition-duration: 0.2s;
    background-position: center;
    background-size: 110%;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    z-index: 5;
    cursor: pointer;
`;
