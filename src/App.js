import React from "react";

import Battle from "./components/Battle/Battle";
import ChooseHero from "./components/ChooseHero/ChooseHero.component";
import CalltoAction from "./components/CTA/CalltoAction";

import Header from "./components/Header/Header";
// import Heroes from "./components/Heroes/Heroes";
import Landing from "./components/Landing/Landing";

const App = () => {
    //   <video
    //   className="heropage_HeroPortrait_22nJ5"
    //   poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png"
    //   preload="auto" autoPlay loop muted
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
        <>
            <Header />
            <Landing />
            <Battle />
            <ChooseHero />
            {/* <Heroes /> */}
            <CalltoAction />
        </>
    );
};

export default App;
