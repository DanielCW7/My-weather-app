import React, {setState, Component} from "react";
import sun from '../images/sun.png';



const Card = (props) => {
    return (
            <li className="flex flex-row bg-gray-200 items-center border-b border-gray-300 px-10 md:flex-col md:px-1 md:border-x md:w-full">
                <img src={sun} className="w-10 m-2 md:w-50 md:max-w-[60px]" /> 
                <p className="text-center px-0"> 69-69-2069 </p>
                <div className="flex flex-row flex-auto md:flex-col justify-evenly p-2 md:p-2 md:w-full lg:w-70 xl:w-60">
                    <span className="flex flex-col md:flex-row md:justify-between"><span className="font-light">High</span><span>69</span></span>
                    <span className="flex flex-col md:flex-row md:justify-between"><span className="font-light">Low</span><span>69</span></span>
                    <span className="flex flex-col md:flex-row md:justify-between"><span className="font-light">Rain</span><span>69</span></span>
                </div>
            </li>
    )
}

export default Card