import React, {setState, Component} from "react";
import sun from '../images/sun.png';



const Card = (props) => {
    return (
            <li className="rounded-3xl max-w-[300px] backdrop-filter backdrop-blur-lg backdrop-brightness-50">
                <p className="py-[10px] text-center"> Monday </p>
                <img src={sun} className="w-2/5 mx-auto mb-[20px]" /> 
                <div className="flex flex-row flex-wrap p-2">
                    <span className="basis-1/3 flex flex-col p-[10px]"><span>high</span><span>69</span></span>
                    <span className="basis-1/3 flex flex-col p-[10px]"><span>low</span><span>69</span></span>
                    <span className="basis-1/3 flex flex-col p-[10px]"><span>rain</span><span>guess what, it's 69</span></span>
                </div>
            </li>
    )
}

export default Card