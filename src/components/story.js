import React from "react";

const Story = () => {
    return (
        <div className="flex basis-1/3 bg-rain-pattern bg-cover">
            <div className="flex flex-col justify-end p-5 bg-gradient-to-t via-black-500 from-black">
                <h3 className="text-2xl text-[#5C00FB] font-bold mb-5"> headline </h3>
                <p> this text should probably end after 20 words and then have an elipsis </p>
            </div>
        </div>
    )
}

export default Story