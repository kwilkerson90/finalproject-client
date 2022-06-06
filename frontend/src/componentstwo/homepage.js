import React from "react";
import ControlledCarousel from "./Carousel";
import HeroSection from "./Hero";

const Homepage = () => {
    return (
        <div className="Homepage">
            <HeroSection />
            <ControlledCarousel />
        </div>
    );
};

export default Homepage;