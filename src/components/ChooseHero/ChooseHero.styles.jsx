import styled from "styled-components";

import chooseHeroBgImage from "../../assets/images/choose-hero-section-bg.jpg";

export const HeroSection = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: inset 0 0 50rem #000;
    position: relative;
`;

export const HeroSectionTexts = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-height: 90vh;
    background-image: url("${chooseHeroBgImage}");
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("${chooseHeroBgImage}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 90%;

    p {
        margin-top: 1rem;
        max-width: 70%;
        text-align: center;
    }
`;

export const HeroesContainer = styled.div`
    width: 80%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
    mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
`;

// .heading-tertiary {
//     margin-top: 1rem;
//     color: #ccc;
// }

// .heroes {

// }

// .heroes__list {
//     display: flex;
// }
