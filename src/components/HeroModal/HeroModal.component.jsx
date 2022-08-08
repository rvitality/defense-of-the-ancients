import React, { useEffect, useState } from "react";

import heroListDetailed from "../../dota-json/hero-data-detailed.json";

import Spinner from "../Spinner/Spinner.component";

import {
    HeroModalContainer,
    Modal,
    HeroAbilities,
    HeroNameContainer,
    AbilityContainer,
    ViewHeroLink,
    HeroName,
    HeroAttackType,
    BtnCloseModal,
} from "./HeroModal.styles";

const HeroModal = ({ name = "", attr = 0, show = false, onCloseModal }) => {
    console.log(name);
    const heroNameRaw = name;
    const heroName = name.replace("npc_dota_hero_", "").replaceAll("_", " ");
    const heroImgSrc = name.replace("npc_dota_hero_", "");

    const [isLoaded, setIsLoaded] = useState(false);

    const heroImgClasses = `hero-img ${isLoaded ? "show" : ""}`;

    const selectedHero = heroListDetailed[heroNameRaw];

    const attackType = selectedHero
        ? selectedHero.attacktype.replace("DOTA_UNIT_CAP_", "").replace("_ATTACK", "").toLowerCase()
        : null;

    let abilityURLs = [];
    if (selectedHero) {
        abilityURLs = selectedHero?.abilities
            ?.map(ability => {
                if (!ability.name.includes("hidden")) {
                    return ability.name;
                }
                return null;
            })
            .filter(Boolean);
    }

    useEffect(() => {
        setIsLoaded(false);
    }, [heroImgSrc]);

    let primaryAttribute = "strength";
    if (attr === 1) {
        primaryAttribute = "agility";
    } else if (attr === 2) {
        primaryAttribute = "intelligence";
    }

    return (
        <HeroModalContainer className={show ? "show" : ""}>
            <Modal>
                {!isLoaded && <Spinner style={{ marginTop: "2rem" }} />}
                <img
                    className={heroImgClasses}
                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroImgSrc}.png`}
                    alt={heroName}
                    onLoad={() => setIsLoaded(true)}
                />

                <div>
                    <HeroNameContainer>
                        <HeroName>
                            <img
                                className="primary-attribute"
                                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${primaryAttribute}.png`}
                                alt="attribute"
                            />
                            <h4 className="hero-name">{heroName}</h4>
                        </HeroName>

                        <BtnCloseModal onClick={onCloseModal}>
                            <span className="close-btn">+</span>
                        </BtnCloseModal>

                        {attackType && (
                            <HeroAttackType>
                                <img
                                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/${attackType}.svg`}
                                    alt={attackType}
                                />
                                <p>{attackType.toUpperCase()}</p>
                            </HeroAttackType>
                        )}
                    </HeroNameContainer>
                    <HeroAbilities>
                        {abilityURLs.map((abilityName, index) => (
                            <AbilityContainer
                                key={abilityName + "_" + index}
                                backgroundImgURL={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${abilityName}.png`}
                            >
                                <div className="ability-name">
                                    {abilityName
                                        .replace(`${heroImgSrc.toLowerCase()}_`, "")
                                        .replaceAll("_", " ")}
                                </div>
                            </AbilityContainer>
                        ))}
                    </HeroAbilities>
                </div>
            </Modal>

            <ViewHeroLink href="#">View Hero</ViewHeroLink>
        </HeroModalContainer>
    );
};

export default HeroModal;
