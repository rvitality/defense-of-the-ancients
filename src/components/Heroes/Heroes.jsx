import React from "react";

import heroesList from "../../hero-list.json";
import Hero from "./Hero";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "./Heroes.scss";

const Heroes = () => {
    // breakpoints: {
    //     768: {
    //         perPage: 2,
    //     },
    //     320: {
    //         perPage: 1,
    //     },
    // },

    const mainOptions = {
        type: "loop",
        drag: "free",
        rewind: true,
        gap: "3rem",
        perPage: 4,
        pagination: false,
        focus: "center",
        isNavigation: true,
        arrows: false,
        lazyLoad: true,
        autoplay: true,
        pauseOnHover: true,
    };

    const thumbsOptions = {
        type: "slide",
        rewind: true,
        gap: "1rem",
        pagination: false,
        cover: true,
        focus: "center",
        isNavigation: true,
        lazyLoad: true,
    };

    return (
        <Splide className="heroes-slide" options={mainOptions}>
            {heroesList.map(heroData => (
                <SplideSlide
                    options={thumbsOptions}
                    key={heroData.id}
                    className="heroes-slide__slide"
                >
                    <Hero heroData={heroData} />
                </SplideSlide>
            ))}
        </Splide>
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
