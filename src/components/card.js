import React, {setState, Component} from "react";
import sun from '../images/sun.png';



const Card = (props) => {
    return (
            <li className="flex flex-row bg-gray-200 items-center border-b border-gray-300 px-10">
                <img src={sun} className="w-10 m-2" /> 
                <p className="text-center px-5"> Monday </p>
                <div className="flex flex-row flex-auto justify-evenly p-2">
                    <span className="flex flex-col"><span className="font-light">high</span><span>69</span></span>
                    <span className="flex flex-col"><span className="font-light">high</span><span>69</span></span>
                    <span className="flex flex-col"><span className="font-light">high</span><span>69</span></span>
                </div>
            </li>
    )
}

export default Card