import React, { useEffect } from 'react';
import Hero from '../containers/hero';
import Forecast from '../containers/forecast';
import News from '../containers/news';
import Intro from '../containers/intro';
import sunset from '../images/sunset.webp'

const Home = () => {

    const font = {color: '#fff', textShadow: '2px 2px 2px #000'}
    const background = {backgroundImage: `url(${sunset})`}

    return (
        <div>
            <Hero title="Weather!" background={background} font={font}/>
            <Intro />
            <Forecast />
            <News />
        </div>
    )
}

export default Home