import React from 'react';
import Hero from '../containers/hero';
import Forecast from '../containers/forecast';

// forecast page with more weather data
const ForecastPage = () => {
    return(
        <div>
            <Hero />
            <Forecast />
            
        </div>
    ) 
}

export default ForecastPage