import React from "react";
import sun from '../images/sun.png';

const Nav = () => {
    return (
        <div className="left-0 right-0 bg-white px-20 py-4 flex justify-between">
            <div className="flex flex-row items-center gap-3">
                <img src={sun} className="max-h-10"/>              
                <h2 className="text-[#4A00C8] font-black text-xl"> Weather! </h2>
            </div>        
        </div>
    )
}

export default Nav