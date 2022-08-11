import styled from "styled-components";

export const HeroContainer = styled.div`
    padding: 0 5rem;
    margin: -15vh 0 0 0;

    width: 100%;
    height: 85vh;
    min-height: 700px;
    background-position-x: -20vw;
    background-color: #000;
    background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg);
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;

    // padding: 40px 100px 0px 140px;
`;

export const VideoContainer = styled.div`
    align-items: flex-start;
    top: -15%;
    position: absolute;
    width: 80%;
    height: 100%;
    right: -5%;
    display: flex;
    justify-content: center;
    // align-items: center;
    pointer-events: none;

    video {
        width: 100%;
        min-height: 100%;
        max-width: 1500px;
        mask-image: linear-gradient(to top, transparent 10%, black 50%);
    }
`;

export const InfoContainer = styled.div`
    margin-top: 8rem;
    width: 35%;
    height: calc(90% - 100px);
    min-height: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;

    h1 {
        text-transform: capitalize;
        margin-bottom: 1rem;
    }

    p {
        color: #eee;
        overflow: auto;
        padding-right: 1rem;
        max-height: 23vh;
        font-size: 1.1rem;
        font-weight: 300;
    }
`;

export const AbilitiesContainer = styled.div`
    position: absolute;
    right: 15vw;
    bottom: 7%;
    width: fit-content;
    min-height: 0;
    display: flex;
    flex-direction: column;
    z-index: 2;

    h3 {
        font-family: "Philosopher", sans-serif;
        color: #fff;
        font-size: 1.25rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const Abilities = styled.div`
    // display: grid;
    // grid-template-columns: repeat(7, 1fr);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 48vw;
`;

export const Ability = styled.div`
    width: 80px;
    height: 80px;
    margin: 0px 6px;
    overflow: visible;
    position: relative;

    img {
        width: 80px;
        height: 80px;
        margin: 0px 6px;
        cursor: pointer;
        box-shadow: 0px 0px 20px #000, 0px 0px 20px #000;
        position: relative;
    }
`;

export const BackgroundShape = styled.div`
    width: 150%;
    height: 650px;
    background-color: #00000060;
    position: absolute;
    transform: skewY(-45deg) translateX(-50vw);
    overflow: hidden;
`;

export const BottomFade = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.733) 100%, rgb(0, 0, 0) 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    left: 0px;
    bottom: 0px;
    right: 0px;
`;

export const Attribute = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 0.5rem;

    img {
        width: 32px;
        height: 32px;
    }

    .attribute-name {
        text-transform: uppercase;
        font-size: 1.25rem;
        letter-spacing: 2px;
    }
`;

export const AttackType = styled.div`
    margin-top: 1.25rem;

    .attack-type-title {
        margin-top: 20px;
        color: #959595;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 17px;
    }

    .attack-type-details {
        display: flex;
        margin-top: 0.7rem;
        gap: 0.85rem;
    }

    .attack-type-value {
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1rem;
    }

    img {
        width: 24px;
        height: 24px;
    }
`;

export const Role = styled.div`
    .attack-type-title {
        margin-top: 30px;
        color: #959595;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 17px;
    }

    .role-values {
        margin-top: 0.4rem;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1rem;
    }
`;
