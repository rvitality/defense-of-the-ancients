import React from "react";

import "./ButtonLink.scss";

const ButtonLink = ({ title, url, imgSrc, className }) => {
    return (
        <a className={`button-link ${className ? className : ""}`} href={url}>
            {title}
            {imgSrc && <img src={imgSrc} alt="steam-icon" />}
        </a>
    );
};

export default ButtonLink;
