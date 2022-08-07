import React, { useMemo, useState } from "react";
import Fade from "../../UI/Fade/Fade";

import heroesList from "../../hero-list.json";

import HeroModal from "../HeroModal/HeroModal.component";

import {
    HeroSection,
    HeroSectionTexts,
    HeroesContainer,
    HeroesListContainer,
} from "./ChooseHero.styles";

import HeroesList from "../HeroesList/HeroesList.component";

const ChooseHero = () => {
    const [showHeroModal, setShowHeroModal] = useState({ name: "", show: false });

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
                {showHeroModal.show && <HeroModal name={showHeroModal.name} />}

                <HeroesListContainer>
                    {heroes.map((heroArr, index) => {
                        return (
                            <HeroesList
                                key={index}
                                onShowHeroModal={data =>
                                    setShowHeroModal({ name: data.heroName, show: data.show })
                                }
                                heroArr={heroArr}
                            />
                        );
                    })}
                </HeroesListContainer>
            </HeroesContainer>

            <Fade />
        </HeroSection>
    );
};

export default ChooseHero;
