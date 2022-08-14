import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 221px;
    background: linear-gradient(80deg, #252728 0%, #101415 100%);
    border-top: 2px solid #282828;
    border-bottom: 2px solid #2c2e2e;
    box-shadow: 0px 0px 8px #000;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0px;
    z-index: 2;

    @media only screen and (max-width: 37.5em) {
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    } //600px

    @media only screen and (max-width: 26.6em) {
        padding: 2.5rem;
    } // 425px
`;

export const VerticalSeparator = styled.div`
    margin: auto 0;
    width: 1px;
    height: 25vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:after {
        content: "";
        width: 100%;
        height: 80%;
        background-color: #4f4f4f;
    }

    @media only screen and (max-width: 37.5em) {
        transform: rotate(90deg);
        height: 10vh;
        &:after {
            height: 20rem;
        }
    } //600px
`;

export const StatsHeader = styled.div`
    color: #969696;
    font-size: 1.15rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #000;
    margin-top: 1.2rem;

    @media only screen and (max-width: 37.5em) {
        font-size: 2rem;
    } //600px
`;

export const DetailsAttributes = styled.div`
    min-width: 300px;
    width: 30%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .top-section {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const Portrait = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 150px;
        height: 84px;
    }

    .bar {
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 1px 1px 2px #000;
        position: relative;
        font-size: 0.95rem;
    }

    .gain {
        position: absolute;
        right: 7%;
        font-size: 0.65rem;
        letter-spacing: 2px;
    }

    .health-bar {
        background: linear-gradient(to right, #286323, #7af03c);
    }
    .mana-bar {
        background: linear-gradient(to right, #1056db, #73f5fe);
    }

    .health-gain {
        color: #286323;
    }
    .mana-gain {
        color: #1056db;
    }

    @media only screen and (max-width: 37.5em) {
        .bar {
            font-size: 1.6rem;
        }
        .gain {
            font-size: 1.25rem;
        }
    } //600px
`;

export const Attributes = styled.div`
    width: 100px;
    height: 120px;
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .single-attribute-container {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 4px 0px;

        img {
            width: 30px;
            height: 30px;
        }
    }

    .attribute-value {
        color: #fff;
        font-family: "Philosopher", sans-serif;
        font-size: 20px;
        font-weight: 600;
        text-shadow: 1px 1px 2px #000;
        margin-left: 12px;
    }

    .attribute-gain {
        color: #999;
        font-size: 15px;
        text-shadow: 1px 1px 2px #000;
        margin-left: 8px;
        flex-grow: 1;
        text-align: right;
    }
`;

export const DetailsStats = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-width: 400px;
    width: 30%;
    min-height: 0;
    align-items: center;

    .stats-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .values-section {
        width: 30%;
        height: 100%;
        min-height: 0;
        display: flex;
        flex-direction: column;
    }

    .value-title {
        margin-left: 8px;
        text-align: left;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #969696;
        margin-bottom: 4px;
    }

    .value-element {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 6px;
        font-size: 1.15rem;
        text-align: left;
    }

    .stats-icon {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }

    @media only screen and (max-width: 26.6em) {
        min-width: 100%;

        .value-element {
            font-size: 1.55rem;
        }
    } // 425px
`;
