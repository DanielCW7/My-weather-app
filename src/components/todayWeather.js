import React, { useEffect, useRef }from "react";
import sun from '../images/sun.png';

// useEffect to keep the fields updated? lifecycle methods?

const Today = (props) => {

        const data = props?.val?.stats ?? "?";
        const image = props?.val?.icon ?? sun;
        const cloudCover = props.val.cloud ?? "?";

        const mounted = useRef();
        useEffect(() => {        
            const icon = document.querySelector("#icon");

            const temp_f = document.querySelector("#temp_f");
            const temp_c = document.querySelector("#temp_c");
            const feels_f = document.querySelector("#feels_f");
            const feels_c = document.querySelector("#feels_c");
            const humidity = document.querySelector("#humidity");
            const windspd = document.querySelector("#windspd");
            const cloud = document.querySelector("#cloud");

            if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
            console.log("day mounted")

            } else if(mounted.current) {
            // do componentDidUpdate logic
            icon.setAttribute("src", image)

            feels_c.innerText = data?.[0] ?? "?"
            feels_f.innerText = data?.[3] ?? "?"
            temp_c.innerText = data?.[2] ?? "?"
            temp_f.innerText = data?.[1] ?? "?"
            humidity.innerText = data?.[4] ?? "?"
            windspd.innerText = data?.[5] ?? "?"
            cloud.innerText = cloudCover

            cloud.innerText += " %";
            humidity.innerText += " %"
            windspd.innerText += " mph"

            console.log("day updated")
            }
        });
    
    return (
        
        <div className="p-10 rounded-2xl w-1/3 flex flex-row backdrop-filter backdrop-blur backdrop-brightness-50">
            <div className="flex flex-col w-40 m-auto">
                <p className="text-center mb-5 text-white font-extrabold"> Today's weather </p>
                <img src={sun} className="w-30 mx-auto" id="icon"/>
                <p className="text-center text-6xl text-white" id="temp_f">?</p>
            </div>

            <div className="flex justify-start w-60 flex-wrap">
                <div className="basis-1/2 flex flex-col justify-center text-white"><div className="p-1 font-extrabold">Temp (C)</div><div className="p-1" id="temp_c">?</div></div> 
                <div className="basis-1/2 flex flex-col justify-center text-white"><div className="p-1 font-extrabold">Feels like (C)</div><div className="p-1" id="feels_c">?</div></div> 
                <div className="basis-1/2 flex flex-col justify-center text-white"><div className="p-1 font-extrabold">Feels like (F)</div><div className="p-1" id="feels_f">?</div></div> 
                <div className="basis-1/2 flex flex-col justify-center text-white"><div className="p-1 font-extrabold">Humidity</div><div className="p-1" id="humidity">?</div></div> 
                <div className="basis-1/2 flex flex-col justify-center text-white"><div className="p-1 font-extrabold">Wind Speed</div><div className="p-1" id="windspd">?</div></div> 
                <div className="basis-1/2 flex flex-col justify-center text-white"><div className="p-1 font-extrabold">Cloud Cover</div><div className="p-1" id="cloud">?</div></div> 

            </div>
        </div>
    )


}

export default Today