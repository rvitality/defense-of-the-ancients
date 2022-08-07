import React from "react";

import "./Fade.scss";

const Fade = ({ top = false, style }) => {
    return <div style={style} className={`fade-divider ${top ? "top" : ""}`}></div>;
};

export default Fade;
