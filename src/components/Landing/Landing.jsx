import React from "react";

import ButtonLink from "../ButtonLink/ButtonLink";
import landingSectionImage from "../../assets/images/juggernaut-hero-section-bg.jpg";

import "./Landing.scss";
import Fade from "../../UI/Fade/Fade";

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__texts">
                <h1 className="heading-primary">Defense of the Ancients</h1>
                <p>
                    Dear hero, you are not powerless. You are quite possibly full of powers. So will
                    you do it? Will you march into almost certain death to battle the enemies?
                    Surely that would be an adventure worthy of your storied name.
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

            <Fade />
        </div>
    );
};

export default Landing;
