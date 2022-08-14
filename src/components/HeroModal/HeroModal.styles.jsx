import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const HeroModalContainer = styled.div`
    position: absolute;
    z-index: 9;
    width: 40%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0 1.3rem 0;
    flex-direction: column;
    transition: all 0.25s ease-in-out;
    opacity: 0;
    pointer-events: none;

    &.show {
        opacity: 1;
        pointer-events: auto;
    }

    @media only screen and (max-width: 56.25em) {
        width: 60%;
    } //900px

    @media only screen and (max-width: 26.6em) {
        width: 70%;
    } // 425px
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
    min-height: 350px;
    width: 70%;
    background: #000;
    border-radius: 1rem;
    text-align: center;
    padding: 1rem 1rem 1.5rem 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.25s ease-in-out;

    .hero-img {
        margin-top: -6rem;
        width: 100%;
        margin-bottom: 1rem;
        display: none;

        &.show {
            display: block;
            animation: ${appear} 1s ease-in-out;
        }
    }

    .hero-name {
        font-family: "Philosopher", sans-serif;
        font-size: 1.7rem;
        text-transform: capitalize;
    }

    @media only screen and (max-width: 56.25em) {
        width: 80%;

        .hero-name {
            font-size: 2.5rem;
        }
    } //900px

    @media only screen and (max-width: 26.6em) {
        min-height: 100%;
    } // 425px
`;

export const HeroNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 1rem 0 1.5rem 0;
    gap: 0.5rem;
    text-transform: capitalize;
`;

export const HeroName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    img {
        width: 1.8rem;
    }

    @media only screen and (max-width: 56.25em) {
        img {
            width: 2.8rem;
        }
    } //900px
`;

export const HeroAttackType = styled(HeroName)`
    font-family: "Philosopher", sans-serif;
    filter: brightness(0.85);
    margin-top: 0.5rem;

    img {
        width: 17%;
    }

    p {
        font-size: 0.95rem;
        letter-spacing: 0.1rem;
    }

    @media only screen and (max-width: 56.25em) {
        img {
            width: 20%;
        }

        p {
            font-size: 1.5rem;
        }
    } //900px
`;

export const HeroAbilities = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const AbilityContainer = styled.div`
    background-image: url(${props => props.backgroundImgURL});
    background-size: cover;
    background-repeat: no-repeat;
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 0.85rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    img {
        width: 100%;
    }

    .ability-name {
        text-transform: capitalize;
        position: absolute;
        z-index: 91;
        padding: 0.5rem 0.8rem;
        border-radius: 0.3rem;
        background: #233;
        color: #fff;
        transition: all 0.25s ease-in-out;
        opacity: 0;
        box-shadow: inset 0 0 1rem rgba(10, 10, 10, 0.75);
        width: max-content;
        bottom: -50%;
    }

    &:hover {
        // transform: scale(1.3);

        .ability-name {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 56.25em) {
        height: 4rem;
        width: 4rem;
    } //900px
`;

export const ViewHeroLink = styled(Link)`
    border: 1px solid #fff;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    font-size: 0.8rem;
    transition: all 0.15s ease-in-out;

    &:hover {
        background: #fff;
        color: #000;
    }

    @media only screen and (max-width: 56.25em) {
        font-size: 1.25rem;
    } //900px
`;

export const BtnCloseModal = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: trasparent;
    position: absolute;
    top: 2%;
    right: 3%;
    cursor: pointer;

    .close-btn {
        font-size: 2rem;
        transform: rotate(45deg);
        color: #ee4047;
        transition: all 0.2s ease-in-out;
        opacity: 0.8;

        &:hover {
            transform: rotate(135deg);
            opacity: 1;
        }
    }

    @media only screen and (max-width: 56.25em) {
        .close-btn {
            font-size: 3rem;
        }
    } //900px
`;
