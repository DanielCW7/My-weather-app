import React from "react";

// useEffect to pass props down here
const Story = (headline, desc, link, img) => {
    return (
        <div className="flex min-h-[350px] bg-rain-pattern bg-cover">
            <div className="flex flex-col justify-end p-5 bg-gradient-to-t via-black from-black text-white w-full">
                <h3 className="text-2xl font-black mb-2"> Headline </h3>
                <p> this text should probably end after 20 words and then have an elipsis ... </p>
                <a className="text-blue-300 mt-5"> Read More </a>
            </div>
        </div>
    )
}

export default Story