import styled from "styled-components";

export const ButtonLinkElement = styled.a`
    background: linear-gradient(#f0424c, #c33237, #9d1515);
    padding: 0.8rem 1.5rem;
    border-radius: 1rem;
    letter-spacing: 0.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.25s ease-in-out;

    &:hover {
        filter: brightness(110%);
    }

    img {
        width: 1.5rem;
        margin-left: 0.5rem;
    }
`;
