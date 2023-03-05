import React, { useEffect, useRef }from "react";
import cloud from '../images/cloud.png';
import moon from '../images/moon.png'
import partiallyCloudy from '../images/partiallyCloudy.png';
import rainy from '../images/rainy.png';
import snow from '../images/snow.png';
import sun from '../images/sun.png';
import storm from '../images/stormCloud.png';
// useEffect to keep the fields updated? lifecycle methods?

const Today = (props) => {

        const data = props?.val?.stats ?? "?";
        let image;
        console.log(props.val.icon)
        if(props?.val?.icon === "Sunny") { image = sun } 
        else if(props?.val?.icon === "Overcast") { image = cloud } 
        else if(props?.val?.icon === "Partly cloudy") { image = partiallyCloudy } 
        else if(props?.val?.icon === "Clear") { image = sun } 
        else if(props?.val?.icon.includes("lightning") || props?.val?.icon.includes("Lightning") || props?.val?.icon.includes("thunder") || props?.val?.icon.includes("Thunder")) { image = storm } 
        else { image = rainy }

        const cloudCover = props?.val?.cloud ?? "?";        

        useEffect(() => {        
            const icon = document.querySelector("#icon");

            const temp_f = document.querySelector("#temp_f");
            const temp_c = document.querySelector("#temp_c");
            const feels_f = document.querySelector("#feels_f");
            const feels_c = document.querySelector("#feels_c");
            const humidity = document.querySelector("#humidity");
            const windspd = document.querySelector("#windspd");
            const cloud = document.querySelector("#cloud");
            const conditions = document.querySelector("#conditions");

                icon.setAttribute("src", image)
                conditions.innerText = props?.val?.icon ?? "Today's weather";
                feels_c.innerText = data?.[0] ?? "?"
                feels_f.innerText = data?.[3] ?? "?"
                temp_c.innerText = data?.[2] ?? "?"
                temp_f.innerText = data?.[1] ?? "?"
                humidity.innerText = data?.[4] ?? "?"
                windspd.innerText = data?.[5] ?? "?"
                cloud.innerText = cloudCover

                console.log("day updated")
            
        });
    
    return (
        
        <div className="p-5 flex flex-row rounded-lg backdrop-filter backdrop-blur-xl backdrop-brightness-50 md:p-10 md:w-60 lg:w-40">
            <div className="w-50">
                <p className="text-center mb-5 text-white font-bold" id="conditions"> Today's weather </p>
                <img className="max-w-[60px] mx-auto" id="icon"/>
                <p className="text-center text-6xl text-white" id="temp_f">?</p>
            </div>

            <div className="w-50 md:flex-col">
                <div className="flex flex-row justify-between text-white"><div className="p-1 font-light">Temp (C)</div><div className="p-1" id="temp_c">?</div></div> 
                <div className="flex flex-row justify-between text-white"><div className="p-1 font-light">Feels like (C)</div><div className="p-1" id="feels_c">?</div></div> 
                <div className="flex flex-row justify-between text-white"><div className="p-1 font-light">Feels like (F)</div><div className="p-1" id="feels_f">?</div></div> 
                <div className="flex flex-row justify-between text-white"><div className="p-1 font-light">Humidity %</div><div className="p-1" id="humidity">?</div></div> 
                <div className="flex flex-row justify-between text-white"><div className="p-1 font-light">Wind Spd (mph)</div><div className="p-1" id="windspd">?</div></div> 
                <div className="flex flex-row justify-between text-white"><div className="p-1 font-light">Cloud %</div><div className="p-1" id="cloud">?</div></div> 

            </div>
        </div>
    )


}

export default Today