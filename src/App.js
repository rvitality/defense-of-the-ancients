import React from "react";

import Battle from "./components/Battle/Battle.component";
import ChooseHero from "./components/ChooseHero/ChooseHero.component";
import ProCircuit from "./components/ProCircuit/ProCircuit.component";

import Header from "./components/Header/Header";
// import Heroes from "./components/Heroes/Heroes";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer.component";

const App = () => {
    return (
        <>
            <Header />
            <Landing />
            <Battle />
            <ChooseHero />
            {/* <Heroes /> */}
            <ProCircuit />
            <Footer />
        </>
    );
};

export default App;
