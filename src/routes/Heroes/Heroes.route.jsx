import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import heroList from "../../dota-json/hero-list.json";

import HeroesBlock from "./HeroesBlock/HeroesBlock.component";

import {
    HeroesContainer,
    FilterBlock,
    SearchHeroForm,
    ComplexityContainer,
    Complexity,
} from "./Heroes.styles";
import Hero from "./Hero/Hero.component";

// 0 str
// 1 agi
// 2 int

const Heroes = () => {
    const [heroes, setHeroes] = useState(heroList);
    const [searchInput, setSearchInput] = useState("");

    // const [attribute, setAttribute] = useState();

    const [complexity, setComplexity] = useState(0);
    const [complexityOneClicks, setComplexityOneClicks] = useState(0);

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
        <Routes>
            <Route
                index
                element={
                    <HeroesContainer>
                        <h1 className="heading-primary">Choose your Hero</h1>
                        <p className="heading-p">
                            From magical tacticians to fierce brutes and cunning rogues, Dota 2's
                            hero pool is massive and limitlessly diverse. Unleash incredible
                            abilities and devastating ultimates on your way to victory.
                        </p>

                        <FilterBlock>
                            <p className="filter-heading">Filter Heroes</p>

                            {/* <AttributeContainer>
                    <p className="attribute-word">Attack Type</p>
                    <Attribute bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg"></Attribute>
                    <Attribute bgURL="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg"></Attribute>
                </AttributeContainer> */}

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
                                    <input
                                        type="text"
                                        onChange={inputChangeHandler}
                                        value={searchInput}
                                    />
                                </div>
                            </SearchHeroForm>
                        </FilterBlock>

                        <HeroesBlock heroes={heroes} />
                    </HeroesContainer>
                }
            />

            <Route path=":hero" element={<Hero />} />
        </Routes>
    );
};

export default Heroes;
