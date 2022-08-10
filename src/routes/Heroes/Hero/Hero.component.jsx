import React from "react";
import { useParams } from "react-router-dom";

import {
    HeroContainer,
    VideoContainer,
    InfoContainer,
    AbilitiesContainer,
    Abilities,
    Ability,
    BackgroundShape,
    BottomFade,
} from "./Hero.styles";

import heroListDetailed from "../../../dota-json/hero-data-detailed.json";
import heroBioData from "../../../dota-json/hero-bio-data.json";
// import heroList from "../../../dota-json/hero-list.json";
// import heroAbilities from "../../../dota-json/hero-abilities.json";

const Hero = () => {
    const { hero: heroName } = useParams();
    const rawHeroName = "npc_dota_hero_" + heroName;

    const heroHistory = heroBioData[rawHeroName]?.bio;

    const heroDetailed = heroListDetailed["npc_dota_hero_" + heroName];

    const selectedHeroAbilities = heroDetailed?.abilities
        .map(ability => {
            if (ability.name !== "generic_hidden") {
                return `${ability.name.toLowerCase()}_hp2`;
            }
            return null;
        })
        .filter(Boolean);

    return (
        <HeroContainer>
            <BackgroundShape />
            <InfoContainer>
                <h1 className="heading-primary"> {heroName.replaceAll("_", " ")}</h1>
                <p dangerouslySetInnerHTML={{ __html: heroHistory }} />
                {!selectedHeroAbilities && (
                    <p style={{ textAlign: "center" }}>
                        <em>Patch outdated.</em>
                    </p>
                )}
            </InfoContainer>

            <VideoContainer>
                <video
                    poster={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroName}.png`}
                    autoPlay
                    preload="auto"
                    loop
                    playsInline
                    muted
                >
                    <source
                        type="video/webm"
                        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroName}.webm`}
                    />
                    <img
                        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroName}.png`}
                        alt=""
                    />
                </video>
            </VideoContainer>

            {selectedHeroAbilities && (
                <AbilitiesContainer>
                    <h3>Abilities</h3>

                    <Abilities>
                        {selectedHeroAbilities.map((abilityName, index) => {
                            const imgURL = `https://steamcdn-a.akamaihd.net/apps/dota2/images/abilities/${abilityName}.png`;

                            return (
                                <Ability key={`${abilityName}_${index}`}>
                                    <img src={imgURL} alt={abilityName} />
                                </Ability>
                            );
                        })}
                    </Abilities>
                </AbilitiesContainer>
            )}
            <BottomFade />
        </HeroContainer>
    );
};

export default Hero;
