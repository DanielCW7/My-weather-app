import React from "react";

const Story = () => {
    return (
        <div className="flex bg-rain-pattern bg-cover">
            <div className="flex flex-col justify-end p-5 bg-gradient-to-t via-black from-black text-white min-h-[350px]">
                <h3 className="text-2xl font-black mb-2"> headline </h3>
                <p> this text should probably end after 20 words and then have an elipsis </p>
                <a className="text-blue-300 mt-5"> Read More </a>
            </div>
        </div>
    )
}

export default Story