import React from "react";

import { Container, Hero, ViewAllHeroesLink } from "./PrevNextHeroes.styles";

import heroDataDetailed from "../../../../dota-json/hero-data-detailed.json";

const PrevNextHeroes = ({ prevHero, nextHero }) => {
    const prevHeroName = prevHero?.name_loc.toLowerCase();
    const prevHeroPath = prevHero?.name.replace("npc_dota_hero_", "");
    const prevHeroPortrait = prevHeroPath?.replace("-", "");

    const nextHeroName = nextHero?.name_loc.toLowerCase();
    const nextHeroPath = nextHero?.name.replace("npc_dota_hero_", "");
    const nextHeroPortrait = nextHeroPath?.replace("-", "");

    const prevAttackType = heroDataDetailed[prevHero.name]?.attacktype
        .replace("DOTA_UNIT_CAP_", "")
        .replace("_ATTACK", "");

    const nextAttackType = heroDataDetailed[nextHero.name]?.attacktype
        .replace("DOTA_UNIT_CAP_", "")
        .replace("_ATTACK", "");

    return (
        <Container>
            <Hero
                className="left"
                to={`/heroes/${prevHeroPath}`}
                style={{
                    backgroundImage:
                        'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png")',
                }}
            >
                <img
                    alt=""
                    className="hero-portrait"
                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/${prevHeroPortrait}.png`}
                />
                <div className="hero-labels">
                    <div className="top-header">Previous Hero</div>
                    <div className="hero-name">{prevHeroName}</div>

                    <div className="hero-details">
                        <img
                            alt=""
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                            className="primary-attribute"
                        />
                        <div className="attack-type">{prevAttackType}</div>
                    </div>
                </div>
            </Hero>
            <ViewAllHeroesLink to="/heroes">All Heroes</ViewAllHeroesLink>
            <Hero
                to={`/heroes/${nextHeroPath}`}
                style={{
                    backgroundImage:
                        'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png")',
                }}
            >
                <img
                    alt=""
                    className="hero-portrait"
                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/${nextHeroPortrait}.png`}
                />
                <div className="hero-labels">
                    <div className="top-header">Next Hero</div>
                    <div className="hero-name">{nextHeroName}</div>

                    <div className="hero-details">
                        <img
                            alt=""
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                            className="primary-attribute"
                        />
                        <div className="attack-type">{nextAttackType}</div>
                    </div>
                </div>
            </Hero>
        </Container>
    );
};

export default PrevNextHeroes;
