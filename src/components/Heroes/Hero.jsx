import React from "react";

import "./Hero.scss";

const attributes = ["strength", "agility", "intelligence"];

const Hero = ({ heroData: hero }) => {
    const heroName = hero.name_english_loc;
    const heroImgSrc = hero.name.replace("npc_dota_hero_", "");

    // 0 - str
    // 1 - agi
    // 2 = int
    let heroAttribute = attributes[hero.primary_attr];

    return (
        <div key={hero.id} className="heroes__card">
            <img
                className="heroes__hero-img"
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroImgSrc}.png`}
                alt={heroName.toLowerCase()}
            />
            <h3 className="heading-secondary">{heroName}</h3>
            <div>
                <img
                    className="primary-attribute"
                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${heroAttribute}.png`}
                    alt="attribute"
                />
                <span>{heroAttribute.toUpperCase()}</span>
            </div>
        </div>
    );
};

export default Hero;
