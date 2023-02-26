import React from "react";

// mobile nav function here
const toggle = () => {

}

const Nav2 = () => {
    return (
        <div className="sticky top-0 left-0 right-0">
            <div className="hidden right-0 bg-[#4A00C8] px-10 py-4 justify-center gap-20 z-10 md:flex">
                <p className="text-[#fff] font-bold "> Forecast </p>
                <p className="text-[#fff] font-bold "> News </p>
                <p className="text-[#fff] font-bold "> Radar </p>
            </div>

            {/* mobile */}
            <div id="mobile-nav" className="bg-[#4A00C8] px-10 py-5 flex flex-col justify-center gap-5 z-10 max-h-100 overflow-hidden md:hidden">
                <span onClick={toggle} className="text-[#fff] font-bold flex flex-row justify-end h-10"> x </span>
                <p className="text-[#fff] font-bold"> Forecast </p>
                <p className="text-[#fff] font-bold"> News </p>
                <p className="text-[#fff] font-bold"> Radar </p>
            </div>
        </div>
    )
}

export default Nav2