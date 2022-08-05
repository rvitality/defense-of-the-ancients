import React, { useEffect } from "react";

import heroes from "./hero-list.json";

const attributes = ["strength", "agility", "intelligence"];

const App = () => {
    //   <video
    //   className="heropage_HeroPortrait_22nJ5"
    //   poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png"
    //   loop
    //   autoPlay
    //   preload="auto"
    // >
    //   <source
    //       type="video/webm"
    //       src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm"
    //   />
    //   <img
    //       src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png"
    //       alt=""
    //   />
    // </video>
    return (
        <div>
            {heroes.map(hero => {
                // const heroName = hero.name
                //     .toLowerCase()
                //     .trim()
                //     .replaceAll(" ", "_")
                //     .replaceAll("-", "");
                const heroName = hero.name_english_loc;
                const heroImgSrc = hero.name.replace("npc_dota_hero_", "");

                // 0 - str
                // 1 - agi
                // 2 = int
                let heroAttribute = attributes[hero.primary_attr];

                return (
                    <div key={hero.id}>
                        <h1 className="heading-primary">{heroName}</h1>
                        <div>
                            <img
                                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${heroAttribute}.png`}
                                alt=""
                            />
                            <span>{heroAttribute.toUpperCase()}</span>
                        </div>
                        <img
                            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImgSrc}.png`}
                            alt={heroName.toLowerCase()}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default App;
