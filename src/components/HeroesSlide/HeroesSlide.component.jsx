import React from "react";

import { HeroesSlideItem, HeroCard } from "./HeroesSlide.styles";

const HeroesSlide = ({ heroArr, onShowHeroModal }) => {
    const clickHeroHandler = heroData => {
        onShowHeroModal({ name: heroData.name, attr: heroData.attr, show: true });
    };

    return (
        <HeroesSlideItem>
            {heroArr.map(hero => {
                const backgroundImageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                    "npc_dota_hero_",
                    ""
                )}.png`;

                return (
                    <HeroCard
                        onClick={clickHeroHandler.bind(null, {
                            name: hero.name,
                            attr: hero.primary_attr,
                        })}
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
                        onClick={clickHeroHandler.bind(null, {
                            name: hero.name,
                            attr: hero.primary_attr,
                        })}
                        key={hero.id + 2}
                        backgroundImageUrl={backgroundImageUrl}
                    ></HeroCard>
                );
            })}
        </HeroesSlideItem>
    );
};

export default HeroesSlide;
