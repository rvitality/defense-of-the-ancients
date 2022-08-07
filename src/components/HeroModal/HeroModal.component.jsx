import React, { useEffect, useState } from "react";

import Spinner from "../Spinner/Spinner.component";

import { HeroModalContainer, Modal } from "./HeroModal.styles";

const HeroModal = ({ name = "" }) => {
    const heroName = name.replace("npc_dota_hero_", "").replace("_", " ");
    const heroImgSrc = name.replace("npc_dota_hero_", "");

    const [isLoaded, setIsLoaded] = useState(false);

    const heroImgClasses = `hero-img ${isLoaded ? "show" : ""}`;

    useEffect(() => {
        setIsLoaded(false);
    }, [heroImgSrc]);

    return (
        <HeroModalContainer>
            <Modal>
                {!isLoaded && <Spinner />}
                <img
                    className={heroImgClasses}
                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroImgSrc}.png`}
                    alt={heroName}
                    onLoad={() => setIsLoaded(true)}
                />

                <div>
                    <p className="hero-name">{heroName}</p>

                    <img
                        className="primary-attribute"
                        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                        alt="attribute"
                    />
                    <span>Strength</span>
                </div>
            </Modal>
        </HeroModalContainer>
    );
};

export default HeroModal;
