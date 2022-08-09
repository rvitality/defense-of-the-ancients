import React, { useMemo, useState } from "react";

import heroesList from "../../dota-json/hero-list.json";

import HeroesSlide from "../HeroesSlide/HeroesSlide.component";
import HeroModal from "../HeroModal/HeroModal.component";
import Fade from "../../UI/Fade/Fade";

import {
    ChooseHeroSection,
    ChooseHeroSectionTexts,
    HeroesContainer,
    HeroesListContainer,
    ViewAllHeroesLink,
} from "./ChooseHero.styles";

const ChooseHero = () => {
    const [showHeroModal, setShowHeroModal] = useState({ name: "", attr: "", show: false });

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
        <ChooseHeroSection id="heroes">
            <Fade top={true} style={{ height: "50vh" }} />

            <ChooseHeroSectionTexts>
                <h3 className="heading-tertiary">Who will you</h3>
                <h2 className="heading-primary heading-primary--large">Choose?</h2>
                <p>
                    From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool
                    is massive and limitlessly diverse. Unleash incredible abilities and devastating
                    ultimates on your way to victory.
                </p>
                <Fade />
            </ChooseHeroSectionTexts>

            <HeroesContainer>
                {showHeroModal.show && (
                    <HeroModal
                        onCloseModal={() => {
                            setShowHeroModal(prevState => ({ ...prevState, show: false }));
                        }}
                        {...showHeroModal}
                    />
                )}

                <HeroesListContainer>
                    {heroes.map((heroArr, index) => {
                        return (
                            <HeroesSlide
                                key={index}
                                onShowHeroModal={heroData =>
                                    setShowHeroModal({
                                        name: heroData.name,
                                        attr: heroData.attr,
                                        show: heroData.show,
                                    })
                                }
                                heroArr={heroArr}
                            />
                        );
                    })}
                </HeroesListContainer>
            </HeroesContainer>

            <ViewAllHeroesLink to="heroes">View All Heroes</ViewAllHeroesLink>

            <Fade />
        </ChooseHeroSection>
    );
};

export default ChooseHero;
