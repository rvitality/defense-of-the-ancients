import React from "react";

import heroesList from "../../hero-list.json";
import Hero from "./Hero";

import "./Heroes.scss";

const Heroes = () => {
    return (
        <div className="heroes">
            {heroesList.map(heroData => (
                <Hero heroData={heroData} />
            ))}
        </div>
    );
};

export default Heroes;

{
    /* <div className="heroes">
    {heroesList.map(heroData => (
        <Hero heroData={heroData} />
    ))}
</div>; */
}
