import React from "react";

import ButtonLink from "../ButtonLink/ButtonLink";
import landingSectionImage from "../../assets/images/juggernaut-hero-section-bg.jpg";

import "./Landing.scss";

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__texts">
                <h1 className="heading-primary">Defense of the Ancients</h1>
                <p>
                    Every day, millions of players worldwide enter the battle as one of over a
                    hundred Dota landinges in a 5v5 team clash. Dota is the deepest multi-player
                    action RTS game ever made and there's always a new strategy or tactic to
                    discover. It's completely free to play and always will be – start defending your
                    ancient now.
                </p>

                <ButtonLink
                    url="https://store.steampowered.com/app/570/Dota_2/"
                    title="Join the Battle"
                    imgSrc={
                        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam_icon.svg"
                    }
                />
            </div>

            <div className="landing__img">
                <img src={landingSectionImage} alt="" />
            </div>

            <div className="landing__bottom-fade"></div>
        </div>
    );
};

export default Landing;
