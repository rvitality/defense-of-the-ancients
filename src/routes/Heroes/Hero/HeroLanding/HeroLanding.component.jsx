import React from "react";

import {
    HeroContainer,
    VideoContainer,
    InfoContainer,
    AbilitiesContainer,
    Abilities,
    Ability,
    BackgroundShape,
    BottomFade,
    Attribute,
    AttackType,
    Role,
} from "./HeroLanding.styles";

import heroBioData from "../../../../dota-json/hero-bio-data.json";

const HeroLanding = ({ heroName, heroData, heroAbilities }) => {
    const rawHeroName = "npc_dota_hero_" + heroName;
    const heroHistory = heroBioData[rawHeroName]?.bio;

    const heroAttribute = heroData?.attributeprimary.replace("DOTA_ATTRIBUTE_", "").toLowerCase();
    let primaryAttribute = "strength";

    if (heroAttribute === "agility") {
        primaryAttribute = "agility";
    } else if (heroAttribute === "intellect") {
        primaryAttribute = "intelligence";
    }

    const heroAttackType = heroData?.attacktype
        .replace("DOTA_UNIT_CAP_", "")
        .replace("_ATTACK", "")
        .toLowerCase();

    const heroRole = heroData?.role;

    return (
        <HeroContainer>
            <BackgroundShape />
            <InfoContainer>
                <Attribute>
                    <img
                        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${primaryAttribute}.png`}
                        alt="attribute"
                    />
                    <div className="attribute-name">{primaryAttribute}</div>
                </Attribute>

                <h1 className="heading-primary"> {heroName.replaceAll("_", " ")}</h1>
                <p dangerouslySetInnerHTML={{ __html: heroHistory }} />
                {!heroData ? (
                    <p style={{ textAlign: "center" }}>
                        <em>Patch outdated.</em>
                    </p>
                ) : (
                    <>
                        <AttackType>
                            <h3 className="attack-type-title">Attack Type</h3>
                            <div className="attack-type-details">
                                <img
                                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/${heroAttackType}.svg`}
                                    alt={heroAttackType}
                                />
                                <div className="attack-type-value">{heroAttackType}</div>
                            </div>
                        </AttackType>

                        <Role>
                            <h3 className="attack-type-title">Roles</h3>
                            <div className="role-values">{heroRole.replaceAll(",", ", ")}</div>
                        </Role>
                    </>
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

            {heroData && (
                <AbilitiesContainer>
                    <h3>Abilities</h3>

                    <Abilities>
                        {heroAbilities.map((abilityName, index) => {
                            const imgURL = `https://steamcdn-a.akamaihd.net/apps/dota2/images/abilities/${abilityName}_hp2.png`;

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

export default HeroLanding;
