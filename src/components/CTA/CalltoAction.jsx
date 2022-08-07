import React from "react";
import Fade from "../../UI/Fade/Fade";

import "./CalltoAction.scss";

const CalltoAction = () => {
    return (
        <div className="cta">
            <Fade top={true} />
            <h2 className="heading-primary heading-primary--large">Download Now</h2>
            <h3 className="heading-tertiary">And Join The Battle</h3>
            <Fade />
        </div>
    );
};

export default CalltoAction;
