import React from "react";

// import ButtonLink from "../ButtonLink/ButtonLink.component";
import Fade from "../../UI/Fade/Fade";

import { ProCircuitSection, ProCircuitTexts, AegiesIcon } from "./ProCircuit.styles.jsx";

const ProCircuit = () => {
    return (
        <ProCircuitSection id="pro-circuit">
            <Fade top={true} />

            <ProCircuitTexts>
                <AegiesIcon />
                <h3 className="heading-tertiary">The</h3>
                <h2 className="heading-primary heading-primary--large">Dota pro circuit</h2>
                <p>
                    When not climbing the ranks, you'll be able to learn from the best. The Dota Pro
                    Circuit features ultra-high-level Dota 2 competition streaming regularly in the
                    game client, on Twitch and Steam.TV. Culminating in the largest e-sports
                    championship in the world, The International, professional Dota 2 is an event
                    not to be missed.
                </p>
            </ProCircuitTexts>

            <Fade />
        </ProCircuitSection>
    );
};

export default ProCircuit;
