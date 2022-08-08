import styled from "styled-components";

import chooseHeroBgImage from "../../assets/images/choose-hero-section-bg.jpg";

export const ChooseHeroSection = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: inset 0 0 50rem #000;
    position: relative;
`;

export const ChooseHeroSectionTexts = styled.div`
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
    position: relative;
    overflow: hidden;
    margin-top: -20vh;
    z-index: 9;
`;

export const HeroesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    // margin: 2.5rem 0 5rem 0;
    mask-image: linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%);
`;

export const ViewAllHeroesLink = styled.a`
    align-self: center;
    margin: 3rem 0 ;
    border-radius: 0;
    background: none;
    border: 1px solid #fff;
    padding: 1rem 1.75rem;
    transition: all .15s ease-in-out;
    text-transform: uppercase;
    font-family: "Philosopher",sans-serif;

    &:hover{
        background: #fff;
        color: #000;
    }
}
`;
