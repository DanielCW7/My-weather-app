import React from 'react';
import Hero from '../containers/hero';
import Forecast from '../containers/forecast';
import Sports from '../components/sports'

// forecast page with more weather data
const SportsPage = () => {
    return(
        <div>
            <Hero />
            <Sports />
            
        </div>
    ) 
}

export default SportsPage