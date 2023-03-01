import React, { useEffect } from 'react';
import Hero from '../containers/hero';
import Forecast from '../containers/forecast';
import News from '../containers/news';
import Intro from '../containers/intro';

const Home = () => {

    return (
        <div>
            <Hero />
            <Intro />
            <Forecast />
            <News />
        </div>
    )
}

export default Home