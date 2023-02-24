import React, {setState, Component} from "react";
import sun from '../images/sun.png';



const Card = (props) => {
    return (
            <li className="rounded-2xl m-[10px] p-[20px] max-w-[300px] bg-gray-100">
                <p className="py-[10px] text-center"> Monday </p>
                <img src={sun} className="w-2/5 mx-auto mb-[20px]" /> 
                <div className="flex flex-row flex-wrap">
                    <span className="basis-1/3 flex flex-col p-[10px]"><span>high</span><span>val</span></span>
                    <span className="basis-1/3 flex flex-col p-[10px]"><span>high</span><span>val</span></span>
                    <span className="basis-1/3 flex flex-col p-[10px]"><span>high</span><span>val</span></span>
                </div>
            </li>
    )
}

export default Card