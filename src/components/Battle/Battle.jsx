import React from "react";
import Fade from "../../UI/Fade/Fade";
import ButtonLink from "../ButtonLink/ButtonLink";

import "./Battle.scss";

const Battle = () => {
    return (
        <div className="battle-section">
            <Fade top={true} />

            <div className="battle-section__texts">
                <h3 className="heading-tertiary">Join The</h3>
                <h2 className="heading-primary heading-primary--large">Batte of the Ancients</h2>
                <p>
                    Every day, millions of players worldwide enter the battle as one of over a
                    hundred Dota landinges in a 5v5 team clash. Dota is the deepest multi-player
                    action RTS game ever made and there's always a new strategy or tactic to
                    discover. It's completely free to play and always will be – start defending your
                    ancient now.
                </p>
                <ButtonLink url="https://www.dota2.com/news" title="See What's New!" />
            </div>

            <div className="video-container">
                <video preload="auto" autoPlay loop muted>
                    <source
                        type="video/webm"
                        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
                    />
                    <source
                        type="video/mp4"
                        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
                    />
                </video>
                <Fade />
            </div>

            <Fade />
        </div>
    );
};

export default Battle;
