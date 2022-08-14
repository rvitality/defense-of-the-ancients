import React from "react";

import { Main } from "./Fade.styles.jsx";

const Fade = ({ top = false, style }) => {
    return <Main style={style} className={`fade-divider ${top ? "top" : ""}`}></Main>;
};

export default Fade;
