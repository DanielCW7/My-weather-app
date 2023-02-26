import React from 'react';
import Hero from './hero';
import Forecast from './forecast';
import News from './news';
import Intro from './intro';
import Footer from './footer';

const main = () => {
    return (
        <div>
            <Hero />
            <Intro />
            <Forecast />
            <News />
            <Footer />
        </div>
    )

}

export default main