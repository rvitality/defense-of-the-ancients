import React, { useState, useEffect } from "react";

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
    ComplexityContainer,
    Complexity,
} from "./Heroes.styles";

// 0 str
// 1 agi
// 2 int

const Heroes = () => {
    const [heroes, setHeroes] = useState(heroList);
    const [searchInput, setSearchInput] = useState("");
    const [attribute, setAttribute] = useState();

    const strengths = heroes.filter(hero => hero.primary_attr === 0);
    const agilities = heroes.filter(hero => hero.primary_attr === 1);
    const intelligences = heroes.filter(hero => hero.primary_attr === 2);

    const [complexity, setComplexity] = useState(0);
    const [complexityOneClicks, setComplexityOneClicks] = useState(0);

    // console.log(complexityOneClicks);

    // useEffect(() => {
    //     setHeroes(prevHeroes => prevHeroes.map(hero => {...hero, match: false}))
    // },[])

    const inputChangeHandler = e => {
        const inputValue = e.target.value.trim();

        setSearchInput(inputValue);

        setHeroes(prevState => {
            return prevState.map(hero => {
                if (hero.name_english_loc.toLowerCase().includes(inputValue.toLowerCase())) {
                    return { ...hero, match: true };
                }

                // no match
                return { ...hero, match: false };
            });
        });

        setComplexity(0);
    };

    const complexityClickHandler = level => {
        setSearchInput("");

        if (level === 1) {
            // ! ====================
            // return to normal
            if (complexityOneClicks >= 1) {
                setComplexity(0);

                setHeroes(prevState => heroList);
            } else {
                setComplexity(1);

                setHeroes(prevState => {
                    return prevState.map(hero => {
                        if (hero.complexity === 1) {
                            return { ...hero, match: true };
                        }

                        // no match
                        return { ...hero, match: false };
                    });
                });
            }

            setComplexityOneClicks(prevCount => {
                if (prevCount >= 1) {
                    return 0;
                }

                return prevCount + 1;
            });
        } else {
            setHeroes(prevState => {
                return prevState.map(hero => {
                    if (hero.complexity === level) {
                        return { ...hero, match: true };
                    }

                    // no match
                    return { ...hero, match: false };
                });
            });

            setComplexity(level);
        }
    };

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
                    <Attribute bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png"></Attribute>
                    <Attribute bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"></Attribute>
                    <Attribute bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"></Attribute>
                </AttributeContainer>

                <ComplexityContainer>
                    <p className="attribute-word">Complexity</p>
                    <Complexity
                        className={complexity >= 1 ? "selected" : ""}
                        onClick={complexityClickHandler.bind(null, 1)}
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    ></Complexity>
                    <Complexity
                        className={complexity >= 2 ? "selected" : ""}
                        onClick={complexityClickHandler.bind(null, 2)}
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    ></Complexity>
                    <Complexity
                        className={complexity === 3 ? "selected" : ""}
                        onClick={complexityClickHandler.bind(null, 3)}
                        bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    ></Complexity>
                </ComplexityContainer>

                <SearchHeroForm>
                    <div className="form-control">
                        <img
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/search.svg"
                            alt="Search Icon"
                        />
                        <input type="text" onChange={inputChangeHandler} value={searchInput} />
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
                    </HeroesGrid>
                </HeroesBlock>
            </HeroesBlockContainer>
        </HeroesContainer>
    );
};

export default Heroes;
