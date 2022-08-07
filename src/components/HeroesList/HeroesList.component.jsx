import React from "react";

import { HeroesList as HeroesListSection, HeroCard } from "./HeroesList.styles";

const HeroesList = ({ heroArr, onShowHeroModal }) => {
    const clickHeroHandler = heroName => {
        onShowHeroModal({ heroName, show: true });
    };

    return (
        <HeroesListSection>
            {heroArr.map(hero => {
                const backgroundImageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                    "npc_dota_hero_",
                    ""
                )}.png`;

                return (
                    <HeroCard
                        onClick={clickHeroHandler.bind(null, hero.name)}
                        key={hero.id + 1}
                        backgroundImageUrl={backgroundImageUrl}
                    ></HeroCard>
                );
            })}

            {heroArr.map(hero => {
                const backgroundImageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                    "npc_dota_hero_",
                    ""
                )}.png`;

                return (
                    <HeroCard
                        onClick={clickHeroHandler.bind(null, hero.name)}
                        key={hero.id + 2}
                        backgroundImageUrl={backgroundImageUrl}
                    ></HeroCard>
                );
            })}
        </HeroesListSection>
    );
};

export default HeroesList;
