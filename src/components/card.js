import React, {setState, Component} from "react";
import cloud from '../images/cloud.png';
import moon from '../images/moon.png'
import partiallyCloudy from '../images/partiallyCloudy.png'
import rainy from '../images/rainy.png'
import snow from '../images/snow.png'
import sun from '../images/sun.png'


const Card = (props) => {
    // props.conditions, includes()
    // need to conditionally render the icons based on props.conditions
        const check = (conditions) => {
            if(conditions.includes("Clear")) { return sun }
            else if(conditions.includes("Rain")) { return rainy }
            else if(conditions.includes("Snow")) { return snow }
            else if(conditions.includes("Partially cloudy")) { return partiallyCloudy }
            else if(conditions.includes("Overcast")) { return cloud }
            else { return sun }
        }
    

    return (
            <li className="flex flex-row bg-gray-200 items-center border-b border-gray-300 px-10 md:flex-col md:px-1 md:border-x md:w-full">
                <img src={check(props.img)} className="w-10 m-2 md:w-50 md:max-w-[60px]" /> 
                <p className="text-center px-0"> {props.date ?? "null"} </p>
                <div className="flex flex-row flex-auto md:flex-col justify-evenly p-2 md:p-2 md:w-full lg:w-70 xl:w-60">
                    <span className="flex flex-col md:flex-row md:justify-between"><span className="font-light">High</span><span>{props.high ?? "null"}</span></span>
                    <span className="flex flex-col md:flex-row md:justify-between"><span className="font-light">Low</span><span>{props.low ?? "null"}</span></span>
                    <span className="flex flex-col md:flex-row md:justify-between"><span className="font-light">Precip %</span><span>{props.rain ?? "null"}</span></span>
                </div>
            </li>
    )
}

export default Card