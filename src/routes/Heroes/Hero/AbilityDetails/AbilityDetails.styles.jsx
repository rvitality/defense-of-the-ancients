import styled from "styled-components";

export const Container = styled.div`
    background-image: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly.png");

    h2 {
        text-align: center;
        font-family: "Philosopher", sans-serif;
        letter-spacing: 2px;
    }

    padding: 2rem 0 4rem 0;
`;

export const Abilities = styled.div`
    margin-top: 2rem;
    width: 100%;
    max-width: 1500px;
    min-height: 542px;
    display: flex;
    flex-direction: row;

    .lore {
        width: 100%;
        background-color: #111;
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px;
        font-style: italic;
        font-size: 14px;
        color: #aaa;
    }
`;

export const AbilityLeft = styled.div`
    width: 55%;
    margin-right: 20px;

    .video-container {
        transition: all 0.25s ease-in-out;
        width: 100%;
        padding-top: 56.25%;
        height: 0px;
        position: relative;
        box-shadow: 3px 3px 8px #000;

        video {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    .abilities-selector {
        width: 100%;
        margin-top: -15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        z-index: 3;
    }

    .ability-selectable {
        width: 80px;
        height: 80px;
        margin: 0px 4px;
        margin-bottom: 8px;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0px 0px 10px #000;
        position: relative;
        transition: all 0.15s ease-in-out;

        filter: saturate(0) brightness(0.6);

        &.active {
            filter: saturate(1) brightness(1);
        }
    }
`;

export const AbilityRight = styled.div`
    width: 45%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ability-info-container {
        width: 100%;
        height: 100%;
    }
`;

export const AbilityMainInfo = styled.div`
    width: 100%;
    padding: 8px;
    background-color: #121212;
    display: flex;
    flex-direction: row;

    img {
        width: 96px;
        height: 96px;
        margin: 10px 15px 10px 10px;
        box-shadow: 0px 0px 8px #000;
    }

    .ability-info {
        flex-grow: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        margin-left: 8px;
        margin-right: 12px;
        align-items: flex-start;
    }

    .ability-name {
        font-family: "Philosopher", sans-serif;
        color: #fff;
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: capitalize;
    }
    .ability-desc {
        color: #ddd;
        font-size: 1rem;
        white-space: pre-wrap;
        margin-bottom: 10px;
    }
`;

export const AbilitySpecificDetails = styled.div`
    width: 100%;
    background-color: #000;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 20px 30px 15px 30px;

    .generic-values {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .column {
        width: 50%;
        min-height: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .details-values {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }

    .value-element {
        font-size: 14px;
        color: #737373;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 4px;

        .value {
            margin-left: 4px;
            color: #fff;
            font-weight: 600;
            letter-spacing: 0px;
            text-transform: uppercase;


            .magical{
                color: rgb(163, 220, 238);
            }

            .pure{
                color: red;
            }

        }
    }
}

.specific-values {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .special-element {
        height: 24px;
        font-size: 14px;
        color: #737373;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        flex-direction: row;
        width: 100%;

        .special-value {
            margin-left: 4px;
            color: #fff;
            font-weight: 600;
            letter-spacing: 0px;
            text-transform: none;
        }
    }
}
`;
