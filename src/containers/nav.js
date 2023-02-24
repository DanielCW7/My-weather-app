import React from "react";
import sun from '../images/sun.png';

const Nav = () => {
    return (
        <div className="bg-blue-800 px-20 py-4 flex justify-between fixed left-0 right-0">
            <div className="flex flex-row items-center gap-3">
                <img src={sun} className="max-h-12"/>              
                <h2 className="text-white font-black text-xl"> Weather! </h2>
            </div>
            <div className="text-white font-semibold flex flex-row items-center gap-5">
                <span> News </span>
                <span> Contact </span>                
            </div>            

        </div>
    )
}

export default Nav