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
    }
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
`;
