import React from "react";

// useEffect to pass props down here
const Story = (headline, desc, link, img) => {
    return (
        <div className={`flex min-h-[350px] bg-[${img}] bg-cover`}>
            <div className="flex flex-col justify-end p-5 bg-gradient-to-t via-black from-black text-white w-full">
                <h3 className="text-2xl font-black mb-2"> {headline ?? "Hmm, something went wrong"} </h3>
                <p> {desc ?? "We're having trouble fetching this data, check back later"} </p>
                <a className="text-blue-300 mt-5" href={link ?? "#"}> Read More </a>
            </div>
        </div>
    )
}

export default Story