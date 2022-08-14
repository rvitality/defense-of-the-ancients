import styled from "styled-components";

export const Main = styled.div`
    background: linear-gradient(
        0deg,
        #000 0,
        rgba(0, 0, 0, 0.738) 19%,
        rgba(0, 0, 0, 0.541) 34%,
        rgba(0, 0, 0, 0.382) 47%,
        rgba(0, 0, 0, 0.278) 56.5%,
        rgba(0, 0, 0, 0.194) 65%,
        rgba(0, 0, 0, 0.126) 73%,
        rgba(0, 0, 0, 0.075) 80.2%,
        rgba(0, 0, 0, 0.042) 86.1%,
        rgba(0, 0, 0, 0.021) 91%,
        rgba(0, 0, 0, 0.008) 95.2%,
        rgba(0, 0, 0, 0.002) 98.2%,
        transparent
    );
    bottom: 0;
    height: 5vh;
    pointer-events: none !important;
    position: absolute;
    width: 100%;
    z-index: 4;
    opacity: 1;

    &.top {
        top: 0;
        bottom: unset;
        transform: rotate(180deg);
    }
`;
