import styled from "styled-components";

export const BattleSection = styled.div`
    height: 125vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    .button-link {
        margin-top: 2rem;
    }

    @media only screen and (max-width: 37.5em) {
        height: 90vh;
    } //600px
`;

export const VideoContainer = styled.div`
    height: 70%;
    width: 100%;
    position: absolute;
    top: 0;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
    }
`;

export const BattleSectionTexts = styled.div`
    z-index: 1;
    text-align: center;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: inset 0 0 50rem #000;
    z-index: 9;
    padding-bottom: 5rem;

    p {
        max-width: 70%;
        margin-top: 1rem;
    }

    @media only screen and (max-width: 26.6em) {
        padding: 5rem 2.5rem;

        p {
            max-width: 100%;
        }
    } // 425px
`;
