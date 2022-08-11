import React from "react";

import {
    Container,
    DetailsAttributes,
    Portrait,
    Attributes,
    DetailsStats,
    StatsHeader,
    VerticalSeparator,
} from "./HeroDetailsBar.styles";

const HeroDetailsBar = ({ heroData }) => {
    return (
        <Container>
            <DetailsAttributes>
                <div className="top-section">
                    <Portrait>
                        <img
                            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroData.name.replace(
                                "npc_dota_hero_",
                                ""
                            )}.png`}
                            alt=""
                        />
                        <div className="bar health-bar ">
                            <div className="base-health">{heroData.statushealth}</div>
                            <div className="gain health-gain">+{heroData.statushealthregen}</div>
                        </div>

                        <div className="bar mana-bar ">
                            <div className="base-mana">{heroData.statusmana}</div>
                            <div className="gain mana-gain">+{heroData.statusmanaregen}</div>
                        </div>
                    </Portrait>

                    <Attributes>
                        <div className="single-attribute-container">
                            <img
                                alt=""
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                            />

                            <div className="attribute-value">{heroData.attributebasestrength}</div>
                            <div className="attribute-gain">+{heroData.attributestrengthgain}</div>
                        </div>
                        <div className="single-attribute-container">
                            <img
                                alt=""
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                            />
                            <div className="attribute-value">{heroData.attributebaseagility}</div>
                            <div className="attribute-gain">+{heroData.attributeagilitygain}</div>
                        </div>
                        <div className="single-attribute-container">
                            <img
                                alt=""
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                            />
                            <div className="attribute-value">
                                {heroData.attributebaseintelligence}
                            </div>
                            <div className="attribute-gain">
                                +{heroData.attributeintelligencegain}
                            </div>
                        </div>
                    </Attributes>
                </div>

                <StatsHeader>Attributes</StatsHeader>
            </DetailsAttributes>

            <VerticalSeparator />

            <DetailsStats>
                <div className="stats-list">
                    <div className="values-section">
                        <div className="value-title">Attack</div>
                        <div className="value-element">
                            <img
                                alt=""
                                className="stats-icon"
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
                            />
                            {heroData.attackdamagemin}-{heroData.attackdamagemax}
                        </div>
                        <div className="value-element">
                            <img
                                alt=""
                                className="stats-icon"
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png"
                            />
                            {heroData.attackrate}
                        </div>
                        <div className="value-element">
                            <img
                                alt=""
                                className="stats-icon"
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png"
                            />
                            {heroData.attackrange}
                        </div>
                    </div>
                    <div className="values-section">
                        <div className="value-title">Defense</div>
                        <div className="value-element">
                            <img
                                alt=""
                                className="stats-icon"
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png"
                            />
                            {heroData.armorphysical}
                        </div>
                        <div className="value-element">
                            <img
                                alt=""
                                className="stats-icon"
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png"
                            />
                            {heroData.magicalresistance}%
                        </div>
                    </div>
                    <div className="values-section">
                        <div className="value-title">Mobility</div>
                        <div className="value-element">
                            <img
                                alt=""
                                className="stats-icon"
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
                            />
                            {heroData.movementspeed}
                        </div>
                        <div className="value-element">
                            <img
                                alt=""
                                className="stats-icon"
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png"
                            />
                            {heroData.movementturnrate}
                        </div>
                        <div className="value-element">
                            <img
                                alt=""
                                className="stats-icon"
                                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png"
                            />
                            {heroData.visiondaytimerange}/{heroData.visionnighttimerange}
                        </div>
                    </div>
                </div>
                <StatsHeader>Stats</StatsHeader>
            </DetailsStats>
        </Container>
    );
};

export default HeroDetailsBar;
