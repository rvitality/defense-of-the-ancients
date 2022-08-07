import React, { useMemo } from "react";
import Fade from "../../UI/Fade/Fade";

import heroesList from "../../hero-list.json";

import { HeroSection, HeroSectionTexts, HeroesContainer } from "./ChooseHero.styles";

import HeroesList from "../HeroesList/HeroesList.component";

const ChooseHero = () => {
    const heroes = useMemo(() => {
        const chunks = [];

        const chunkSize = 25;

        for (let i = 0; i < heroesList.length; i += chunkSize) {
            const chunk = heroesList.slice(i, i + chunkSize);
            chunks.push(chunk);
        }

        return chunks;
    }, []);

    return (
        <HeroSection>
            <Fade top={true} style={{ height: "50vh" }} />

            <HeroSectionTexts>
                <h3 className="heading-tertiary">Who will you</h3>
                <h2 className="heading-primary heading-primary--large">Choose?</h2>
                <p>
                    From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool
                    is massive and limitlessly diverse. Unleash incredible abilities and devastating
                    ultimates on your way to victory.
                </p>
                <Fade />
            </HeroSectionTexts>

            <HeroesContainer>
                {heroes.map(heroArr => {
                    return <HeroesList heroArr={heroArr} />;
                })}
            </HeroesContainer>
            <Fade />
        </HeroSection>
    );
};

export default ChooseHero;
