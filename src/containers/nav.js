import React from "react";
import sun from '../images/sun.png';

const Nav = () => {
    return (
        <div className="left-0 right-0 bg-white flex items-center justify-start px-10 py-2">
            <img src={sun} className="max-h-10"/>              
            <h2 className="text-[#4A00C8] font-black text-xl p-2"> Weather! </h2>
        </div>
    )
}

export default Nav