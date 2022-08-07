import styled, { keyframes } from "styled-components";

export const HeroModalContainer = styled.div`
    position: absolute;
    z-index: 9;
    height: 50%;
    width: 40%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const appear = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
  }
`;

export const Modal = styled.div`
    width: 70%;
    height: 80%;
    background: #000;
    border-radius: 1rem;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .hero-img {
        margin-top: -6rem;
        width: 100%;
        margin-bottom: 1rem;
        display: none;

        // transition: all 0.25s ease-in-out;

        &.show {
            display: block;
            animation: ${appear} 1s ease-in-out;
        }
    }

    .hero-name {
        font-family: "Philosopher", sans-serif;
        font-size: 1.6rem;
        text-transform: capitalize;
    }
`;
