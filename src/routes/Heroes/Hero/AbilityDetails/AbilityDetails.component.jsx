import React, { useState } from "react";

import {
    Container,
    Abilities,
    AbilityLeft,
    AbilityRight,
    AbilityMainInfo,
    AbilitySpecificDetails,
} from "./AbilityDetails.styles";

import heroAbilitiesData from "../../../../dota-json/hero-abilities.json";
import heroAbilitiesDetailed from "../../../../dota-json/hero-abilities-detailed.json";

const AbilityDetails = ({ heroName, heroAbilities }) => {
    heroName = heroName === "zeus" ? "zuus" : heroName;

    const abilities = heroAbilities?.map(ability => {
        const {
            behavior,
            SpellImmunityType,
            abilityunitdamagetype,
            AbilityCastRange,
            damage,
            cooldown,
            manacost,
        } = heroAbilitiesDetailed[ability];

        const targetType = behavior?.[0].replace("DOTA_ABILITY_BEHAVIOR_", "").replaceAll("_", " ");

        const piercesSpellImmunity = SpellImmunityType?.replace("SPELL_IMMUNITY_ENEMIES_", "");

        const damageType = abilityunitdamagetype?.replace("DAMAGE_TYPE_", "");
        const castRanges = Array.isArray(AbilityCastRange)
            ? AbilityCastRange?.join(" / ")
            : AbilityCastRange;

        const abilityDamage = damage?.filter(el => el > 0).join(" / ");
        const abilityCooldown = cooldown?.filter(el => el > 0).join(" / ");
        const abilityManacost = manacost?.filter(el => el > 0).join(" / ");

        return {
            name: ability,
            targetType,
            damageType,
            castRanges,
            abilityDamage,
            abilityCooldown,
            abilityManacost,
            piercesSpellImmunity,
            ...heroAbilitiesData[ability],
        };
    });

    const [selectedAbility, setSelectedAbility] = useState(abilities[0]);
    const [activeAbility, setActiveAbility] = useState(abilities[0].name);

    const selectAbilityHandler = ability => {
        setSelectedAbility(ability);
        setActiveAbility(ability.name);
    };

    return (
        <Container>
            <h2>Abilities:</h2>

            <Abilities>
                <AbilityLeft>
                    <div className="video-container">
                        <video
                            key={selectedAbility.name}
                            controls=""
                            loop
                            autoPlay
                            preload="auto"
                            playsInline
                            // muted
                            poster={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${heroName}/${selectedAbility.name}.jpg`}
                        >
                            <source
                                type="video/webm"
                                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${heroName}/${selectedAbility.name}.webm`}
                            />
                            <source
                                type="video/mp4"
                                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${heroName}/${selectedAbility.name}.mp4`}
                            />
                        </video>
                    </div>

                    <div className="abilities-selector">
                        {abilities.map((ability, index) => {
                            const abilityName = ability.name;
                            // const abilityName = Object.keys(ability)[0];
                            // const description = ability[abilityName].description;
                            // const lore = ability[abilityName].lore;

                            const bgImageURL = `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${abilityName}.png)`;

                            return (
                                <div
                                    key={`${abilityName}_${index}`}
                                    className={`ability-selectable ${
                                        activeAbility === abilityName ? "active" : ""
                                    }`}
                                    style={{
                                        backgroundImage: bgImageURL,
                                    }}
                                    onClick={() => selectAbilityHandler(ability)}
                                ></div>
                            );
                        })}
                    </div>
                </AbilityLeft>

                <AbilityRight>
                    <div className="ability-info-container">
                        <AbilityMainInfo>
                            <img
                                alt=""
                                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${selectedAbility.name}.png`}
                            />
                            <div className="ability-info">
                                <div className="ability-name">
                                    {selectedAbility.name
                                        .replace(`${heroName}_`, "")
                                        .replaceAll("_", " ")}
                                </div>
                                {/* <div className="ability-desc">{selectedAbility.description}</div> */}

                                <div
                                    className="ability-desc"
                                    dangerouslySetInnerHTML={{
                                        __html: selectedAbility.description,
                                    }}
                                />
                            </div>
                        </AbilityMainInfo>

                        <AbilitySpecificDetails>
                            <div className="generic-values">
                                <div className="column">
                                    <div className="details-values">
                                        <div className="value-element">
                                            Ability:
                                            <div className="value">
                                                {selectedAbility.targetType}
                                            </div>
                                        </div>
                                        <div className="value-element">
                                            Damage Type:
                                            <div className="value">
                                                <span
                                                    className={`${
                                                        selectedAbility.damageType?.toLowerCase() ===
                                                        "magical"
                                                            ? "magical"
                                                            : "pure"
                                                    }`}
                                                >
                                                    {selectedAbility.damageType}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="details-values">
                                        <div className="value-element">
                                            Pierces Spell Immunity:
                                            <div className="value">
                                                {selectedAbility.piercesSpellImmunity}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="specific-values">
                                <div className="special-element">
                                    Damage:
                                    <div className="special-value">
                                        {selectedAbility.abilityDamage}
                                    </div>
                                </div>
                                <div className="special-element">
                                    Cooldown:
                                    <div className="special-value">
                                        {selectedAbility.abilityCooldown}
                                    </div>
                                </div>
                                <div className="special-element">
                                    Cast Range:
                                    <div className="special-value">
                                        {selectedAbility.castRanges}
                                    </div>
                                </div>
                                <div className="special-element">
                                    Mana Cost:
                                    <div className="special-value">
                                        {selectedAbility.abilityManacost}
                                    </div>
                                </div>
                            </div>
                            <div className="lore">{selectedAbility.lore}</div>
                        </AbilitySpecificDetails>
                    </div>
                </AbilityRight>
            </Abilities>
        </Container>
    );
};

export default AbilityDetails;
