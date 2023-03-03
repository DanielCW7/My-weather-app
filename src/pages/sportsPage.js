import React, { useEffect, useState, useRef }from "react";
import Hero from '../containers/hero';
import Sports from '../components/sports'

// forecast page with more weather data
const SportsPage = () => {

    // const [sports, setStories] = useState([]);

    // const data = (response) => {
    //     if(response) {        
    //         const sportsComponents = response.topStories.map(item => {
    //             return <Sports key={item.id} link={item.url} headline={item.title} img={item.mainMedia.gallery.url}/>
    //         });
    //         setStories(sportsComponents);
    //     } else {
    //         setStories([]);
    //     }
    // } 
 

    // useEffect(() => {        
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '98a8341ffcmsh7a4d6c17a49f6ecp153be9jsn0d3a5abcccce',
    //             'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    //         }
    //     };
            
    //     fetch('https://livescore6.p.rapidapi.com/news/v2/list', options)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response)
    //             data(response)
    //         })
    //         .catch(err => console.error(err));
    // }, []);

    return(
        <div>
            <Hero />
            <div id="newsContainer" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5 xl:grid-cols-4">
                {/* {sports} */}
            </div>
        </div>
    ) 
}

export default SportsPage