import React from "react";

import heroList from "../../dota-json/hero-list.json";

import {
    HeroesContainer,
    FilterBlock,
    HeroesGrid,
    HeroLink,
    HeroName,
    HeroesBlockContainer,
    HeroesBlock,
    AttributeContainer,
    Attribute,
    SearchHeroForm,
} from "./Heroes.styles";

// 0 str
// 1 agi
// 2 int

const Heroes = () => {
    const strengths = heroList.filter(hero => hero.primary_attr === 0);
    const agilities = heroList.filter(hero => hero.primary_attr === 1);
    const intelligences = heroList.filter(hero => hero.primary_attr === 2);

    return (
        <HeroesContainer>
            <h1 className="heading-primary">Choose your Hero</h1>
            <p className="heading-p">
                From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is
                massive and limitlessly diverse. Unleash incredible abilities and devastating
                ultimates on your way to victory.
            </p>

            <FilterBlock>
                <p className="filter-heading">Filter Heroes</p>

                <AttributeContainer>
                    <p className="attribute-word">Attribute</p>
                    <Attribute
                        type="str"
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png"
                    ></Attribute>
                    <Attribute
                        type="agi"
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"
                    ></Attribute>
                    <Attribute
                        type="int"
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"
                    ></Attribute>
                </AttributeContainer>

                <AttributeContainer>
                    <p className="attribute-word">Complexity</p>
                    <Attribute
                        diff="1"
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    ></Attribute>
                    <Attribute
                        diff="2"
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    ></Attribute>
                    <Attribute
                        diff="3"
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    ></Attribute>
                </AttributeContainer>

                <SearchHeroForm>
                    <div className="form-control">
                        <img
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/search.svg"
                            alt="Search Icon"
                        />
                        <input type="text" />
                    </div>
                </SearchHeroForm>
            </FilterBlock>

            <HeroesBlockContainer>
                <HeroesBlock>
                    <h2 className="secondary-heading">Strength</h2>
                    <HeroesGrid>
                        {strengths.map(hero => {
                            const bgImageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                                "npc_dota_hero_",
                                ""
                            )}.png`;

                            return (
                                <HeroLink
                                    key={hero.id}
                                    to={hero.name.replace("npc_dota_hero_", "")}
                                    bgimageurl={bgImageUrl}
                                >
                                    <HeroName>{hero.name_english_loc}</HeroName>
                                </HeroLink>
                            );
                        })}
                    </HeroesGrid>
                </HeroesBlock>
                <HeroesBlock>
                    <h2 className="secondary-heading">Agility</h2>
                    <HeroesGrid>
                        {agilities.map(hero => {
                            const bgImageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                                "npc_dota_hero_",
                                ""
                            )}.png`;

                            return (
                                <HeroLink
                                    key={hero.id}
                                    to={hero.name.replace("npc_dota_hero_", "")}
                                    bgimageurl={bgImageUrl}
                                >
                                    <HeroName>{hero.name_english_loc}</HeroName>
                                </HeroLink>
                            );
                        })}
                    </HeroesGrid>
                </HeroesBlock>

                <HeroesBlock>
                    <h2 className="secondary-heading">Intelligence</h2>
                    <HeroesGrid>
                        {intelligences.map(hero => {
                            const bgImageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                                "npc_dota_hero_",
                                ""
                            )}.png`;

                            return (
                                <HeroLink
                                    key={hero.id}
                                    to={hero.name.replace("npc_dota_hero_", "")}
                                    bgimageurl={bgImageUrl}
                                >
                                    <HeroName>{hero.name_english_loc}</HeroName>
                                </HeroLink>
                            );
                        })}
                    </HeroesGrid>
                </HeroesBlock>
            </HeroesBlockContainer>
        </HeroesContainer>
    );
};

export default Heroes;
