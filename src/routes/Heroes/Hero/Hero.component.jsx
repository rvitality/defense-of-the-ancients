import React from "react";
import { useParams } from "react-router-dom";

import heroListDetailed from "../../../dota-json/hero-data-detailed.json";
import AbilityDetails from "./AbilityDetails/AbilityDetails.component";

import heroList from "../../../dota-json/hero-list.json";
// import heroAbilities from "../../../dota-json/hero-abilities.json";

import HeroDetailsBar from "./HeroDetailsBar/HeroDetailsBar.component";
import HeroLanding from "./HeroLanding/HeroLanding.component";
import PrevNextHeroes from "./PrevNextHeroes/PrevNextHeroes.component";

import { HeroContainer } from "./Hero.styles";

const Hero = () => {
    const { hero: heroName } = useParams();
    const rawHeroName = "npc_dota_hero_" + heroName;

    const currentHeroIndex = heroList.findIndex(hero => hero.name === rawHeroName);
    const prevHeroIndex = currentHeroIndex === 0 ? 122 : currentHeroIndex - 1;
    const nextHeroIndex = currentHeroIndex === 122 ? 0 : currentHeroIndex + 1;

    const prevHero = heroList[prevHeroIndex];
    const nextHero = heroList[nextHeroIndex];

    const selectedHeroDetailedData = heroListDetailed["npc_dota_hero_" + heroName];

    const selectedHeroAbilities = selectedHeroDetailedData?.abilities
        .map(ability => {
            if (ability.name !== "generic_hidden") {
                return `${ability.name.toLowerCase()}`;
            }
            return null;
        })
        .filter(Boolean);

    return (
        <HeroContainer key={heroName}>
            <HeroLanding
                heroName={heroName}
                heroData={selectedHeroDetailedData}
                heroAbilities={selectedHeroAbilities}
            />

            {selectedHeroDetailedData && <HeroDetailsBar heroData={selectedHeroDetailedData} />}
            {selectedHeroAbilities && (
                <AbilityDetails heroName={heroName} heroAbilities={selectedHeroAbilities} />
            )}

            <PrevNextHeroes prevHero={prevHero} nextHero={nextHero} />
        </HeroContainer>
    );
};

export default Hero;
