import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./routes/Header/Header.component";

import Landing from "./components/Landing/Landing.component";

import Battle from "./components/Battle/Battle.component";
import ChooseHero from "./components/ChooseHero/ChooseHero.component";
import ProCircuit from "./components/ProCircuit/ProCircuit.component";
import Footer from "./routes/Footer/Footer.component";

import Heroes from "./routes/Heroes/Heroes.route";

const App = () => {
    return (
        <Routes>
            <Route
                path="/defense-of-the-ancients"
                element={
                    <>
                        <Header />
                        <Footer />
                    </>
                }
            >
                <Route
                    index
                    element={
                        <>
                            <Landing />
                            <Battle />
                            <ChooseHero />
                            <ProCircuit />
                        </>
                    }
                />
                <Route path="heroes/*" element={<Heroes />} />
            </Route>
            <Route
                path="*"
                element={
                    <>
                        <Header />
                        <div>
                            <p>There is nothing here!</p>
                        </div>
                        <Footer />
                    </>
                }
            />
        </Routes>
    );
};

export default App;
