import React from "react";

const Intro = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center px-10 md:min-h-60h">
            <div className="m-auto w-100 md:w-70 lg:w-50">
                <h2 className="text-4xl text-[#5C00FB] font-black mb-5"><i>"This weather app ain't that great bruh"</i></h2>
                <p> This app is like the moldy residue of the web app store, no lie. Like, 
                I'm pretty sure that if this app was a person, this person would be the
                kind of person to not tell you that you have a shit stain on your pants
                before a big interview. If you use this app, It's like you intentionally
                play ranked warzone on that shitbox of a laptop you own... from 2006.
                <br/>
                you're just asking to lose, bruh. don't use this app.<br/>
                please. </p>
                <p className="mt-10">- GQ Magazine </p>
            </div>
        </div>
    )
}

export default Intro