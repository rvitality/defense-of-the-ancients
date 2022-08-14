import styled from "styled-components";

// import proCircuitBackgroundImgURL from "../../assets/images/juggernaut-cta-section-bg.jpg";

export const ProCircuitSection = styled.div`
    background-image: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg");
    background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
        url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 90%;
    min-height: 110vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    // box-shadow: inset 0 0 50rem #000;
    position: relative;

    padding-bottom: 6rem;
    background-position: top;
    background-size: 2000px;

    .heading-tertiary {
        margin-top: 1rem;
        color: #ccc;
    }

    @media only screen and (max-width: 56.25em) {
        min-height: 90vh;
    } //900px

    @media only screen and (max-width: 26.6em) {
        min-height: 70vh;

        background-position-y: 80%;
    } // 425px
`;

export const ProCircuitTexts = styled.div`
    margin-top: 550px;

    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .heading-primary {
        text-transform: capitalize;
    }

    p {
        margin-top: 1rem;
    }

    @media only screen and (max-width: 26.6em) {
        margin-top: 30rem;
        max-width: 100%;
        padding: 2.5rem;
    } // 425px
`;

export const AegiesIcon = styled.div`
    background-image: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg");
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 96px;
    min-height: 96px;
`;
