import React, { useEffect, useState, useRef }from "react";
import Story from '../components/story';


const News = () => {
 
    // const [stories, setStories] = useState([]);

    // const data = (response) => {
    //     if(response) {        
    //         const storyComponents = response.map(item => {
    //             return <Story key={item.id} link={item.url} headline={item.seometa.title} desc={item.seometa.description} img={item.variants[0]}/>
    //         });
    //         setStories(storyComponents);
    //     } else {
    //         setStories([]);
    //     }
    // } 
 
    // const mounted = useRef();

    // useEffect(() => {        

    //     if (!mounted.current) {
    //     // do componentDidMount logic
    //         mounted.current = true;

    //     } else if(mounted.current) {
    //     // do componentDidUpdate logic
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': '98a8341ffcmsh7a4d6c17a49f6ecp153be9jsn0d3a5abcccce',
    //                 'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
    //             }
    //         };
            
    //         fetch('https://weather338.p.rapidapi.com/news/list?offset=0&limit=4', options)
    //             .then(response => response.json())
    //             .then(response => {
    //                 console.log(response)
    //                 data(response)
    //             })
    //             .catch(err => console.error(err));
    //     }
    // }, []);


    return (
        <div className="p-10 md: min-h-60h">
            <div className="mb-10">
                <h3 className="text-4xl font-bold text-center"> What's... <i>New?</i> ha </h3>
            </div>
            <div>
                <div id="newsContainer" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5 xl:grid-cols-4">
                    {/* {stories} */}
                </div>
                {/* <button className="border-2 border-blue-300 py-2 rounded-lg block min-w-full text-blue-300 font-bold md:m-auto md:min-w-min md:w-10" type="submit"> More </button> */}
            </div>
        </div>
    )
}  

export default News;
