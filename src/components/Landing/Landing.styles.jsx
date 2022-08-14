import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    padding: 5rem;
    overflow: hidden;
    margin-top: -15vh;

    .button-link {
        box-shadow: 0 0 30px 0 #e13a42, 0.1rem 0.1rem 15px mix(black, #e13a42, 100%);
    }

    @media only screen and (max-width: 37.5em) {
        height: 85vh;
    } //600px

    @media only screen and (max-width: 26.6em) {
        padding: 5rem 2.5rem;
    } // 425px
`;

export const TextsContainer = styled.div`
    margin-top: 3rem;
    max-width: 50%;

    h1 {
        margin-bottom: 1rem;
    }

    p {
        max-width: 100%;
        color: #777;
        margin-bottom: 2.5rem;
        font-size: 1rem;

        @media only screen and (max-width: 56.25em) {
            font-size: 1.15rem;
            color: #fff;
        } //900px
    }

    @media only screen and (max-width: 26.6em) {
        max-width: 70%;
    } // 425px
`;

export const BackgroundImageContainer = styled.div`
    position: absolute;
    z-index: -1;
    right: -5%;
    top: 5%;

    img {
        width: 100%;
        height: 100vh;
        transform: scale(1.2);
    }

    @media only screen and (max-width: 56.25em) {
        right: -25%;
    } //900px

    @media only screen and (max-width: 37.5em) {
        top: 17%;

        img {
            height: 65vh;
        }
    } //600px

    @media only screen and (max-width: 26.6em) {
        top: 25%;
        right: -40%;
    } // 425px

    @media only screen and (max-width: 23.44em) {
        filter: brightness(0.5);
    } // 375px
`;
