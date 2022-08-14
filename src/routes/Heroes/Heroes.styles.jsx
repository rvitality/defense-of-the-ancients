import styled from "styled-components";

export const HeroesContainer = styled.div`
    margin-top: -15vh;
    padding: 20vh 5rem 1rem 5rem;
    text-align: center;
    background-image: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    position: relative;

    .heading-p {
        margin: 1rem auto;
        max-width: 70%;
    }

    @media only screen and (max-width: 26.6em) {
        padding: 20vh 2.5rem 1rem 2.5rem;

        .heading-p {
            max-width: 100%;
        }
    } // 425px
`;

export const FilterBlock = styled.div`
    font-family: "Philosopher", sans-serif;
    max-width: 100%;
    margin: 3rem auto;
    padding: 1rem 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #11111190;
    box-shadow: 0px 0px 30px #00000050;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));

    .filter-heading {
        font-size: 1.35rem;
        letter-spacing: 1px;
    }

    @media only screen and (max-width: 37.5em) {
        .filter-heading {
            font-size: 1.6rem;
        }
    } //600px

    @media only screen and (max-width: 26.6em) {
        gap: 3rem;

        .filter-heading {
            display: none;
        }
    } // 425px

    @media only screen and (max-width: 20.31em) {
        gap: 0.8rem;
    } //325px
`;

export const AttributeContainer = styled.div`
    display: flex;
    align-items: center;

    .attribute-word {
        color: #808fa6;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-right: 1.25rem;
    }

    @media only screen and (max-width: 37.5em) {
        .attribute-word {
            font-size: 1.15rem;
        }
    } //600px
`;

export const Attribute = styled.div`
    background-image: url(${props => props.bgURL});
    width: 43px;
    height: 35px;
    margin-left: -4px;
    background-size: cover;
    background-repeat: no-repeat;
    transition-property: filter;
    transition-timing-function: ease-in-out;
    transition-duration: 0.1s;
    cursor: pointer;
    color: #fff;
    filter: brightness(0.5) saturate(0);
    cursor: pointer;

    @media only screen and (max-width: 37.5em) {
        width: 30px;
        height: 22px;
    } //600px

    @media only screen and (max-width: 20.31em) {
        width: 24px;
        height: 20px;
    } //325px
`;

export const ComplexityContainer = styled(AttributeContainer)``;

export const Complexity = styled(Attribute)`
    &.selected {
        filter: brightness(1) saturate(1);
    }
`;

export const SearchHeroForm = styled.form`
    width: 45%;
    height: 3rem;

    background-color: #25282a;
    display: flex;
    flex-direction: row;
    align-items: center;

    .form-control {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding-left: 1rem;
    }

    input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-size: 1rem;
    }

    @media only screen and (max-width: 56.25em) {
        input {
            font-size: 1.8rem;
        }
    } //900px

    @media only screen and (max-width: 37.5em) {
        width: 35%;

        img {
            width: 10%;
        }
    } //600px

    @media only screen and (max-width: 26.6em) {
        width: 100%;

        img {
            width: 15%;
        }
    } // 425px
`;
