import React, { useEffect } from "react";

import Battle from "./components/Battle/Battle";
import ChooseHero from "./components/ChooseHero/ChooseHero.component";
import CalltoAction from "./components/CTA/CalltoAction";

import Header from "./components/Header/Header";
// import Heroes from "./components/Heroes/Heroes";
import Landing from "./components/Landing/Landing";

const App = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://www.dota2.com/datafeed/herodata?language=english&hero_id=102"
            );

            const data = await response.json();

            console.log(data);
        };

        fetchData();
    }, []);

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
