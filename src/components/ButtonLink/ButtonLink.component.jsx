import React from "react";

import { ButtonLinkElement } from "./ButtonLink.styles.jsx";

const ButtonLink = ({ title, url, imgSrc, className }) => {
    return (
        <ButtonLinkElement className={`button-link ${className ? className : ""}`} href={url}>
            {title}
            {imgSrc && <img src={imgSrc} alt="steam-icon" />}
        </ButtonLinkElement>
    );
};

export default ButtonLink;
