import React from "react";
import loader from '../images/spinner.png'
const Loading = () => {
    return (
        <div className="flex justify-center md:w-screen">
            <img src={loader} alt="loading..." className="flex justify-center max-w-[50px] animate-spin m-20"/>
        </div>
    )
}

export default Loading