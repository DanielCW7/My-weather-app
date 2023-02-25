import React from 'react';
import storm from '../images/storm.webp';


const Hero = () => {
    return (
        <div id="hero" className="flex flex-col justify-center min-h-50h bg-sunny-pattern bg-cover px-20">
            <h1 className="text-6xl font-bold text-white text-center"> Weather! <i>Amiright??</i> </h1>
            <p className="text-2xl font-bold text-white text-center"> lorem ipsum text </p>
        </div>
    )
}

export default Hero;