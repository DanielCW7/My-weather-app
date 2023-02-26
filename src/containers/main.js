import React from 'react';
import Hero from './hero';
import Forecast from './forecast';
import News from './news';
import Intro from './intro'

const main = () => {
    return (
        <div>
            <Hero />
            <Intro />
            <Forecast />
            <News />
        </div>
    )

}

export default main