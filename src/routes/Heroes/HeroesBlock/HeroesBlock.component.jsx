import React from "react";

import {
    HeroesGroupContainer,
    HeroesGroup,
    HeroesGroupGrid,
    HeroLink,
    HeroName,
} from "./HeroesBlock.styles";

const HeroesBlock = ({ heroes = [] }) => {
    const strengths = heroes.filter(hero => hero.primary_attr === 0);
    const agilities = heroes.filter(hero => hero.primary_attr === 1);
    const intelligences = heroes.filter(hero => hero.primary_attr === 2);

    const HEROES_LIST = [
        { id: 0, type: "Strength", heroes: [...strengths] },
        { id: 1, type: "Agility", heroes: [...agilities] },
        { id: 2, type: "Intelligence", heroes: [...intelligences] },
    ];

    return (
        <HeroesGroupContainer>
            {HEROES_LIST.map(heroesData => (
                <HeroesGroup key={heroesData.id}>
                    <h2 className="secondary-heading">{heroesData.type}</h2>
                    <HeroesGroupGrid>
                        {heroesData.heroes.map(hero => {
                            const bgImageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                                "npc_dota_hero_",
                                ""
                            )}.png`;

                            let classes;
                            if (hero.match !== undefined) {
                                classes = !hero.match ? "no-match" : "";
                            }

                            return (
                                <HeroLink
                                    key={hero.id}
                                    className={classes}
                                    to={hero.name.replace("npc_dota_hero_", "")}
                                    bgimageurl={bgImageUrl}
                                >
                                    <HeroName>{hero.name_english_loc}</HeroName>
                                </HeroLink>
                            );
                        })}
                    </HeroesGroupGrid>
                </HeroesGroup>
            ))}
        </HeroesGroupContainer>
    );
};

export default HeroesBlock;
