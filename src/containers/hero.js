import React from 'react';

// hero should recieve props depending on the page it's on! dynamic text and whatnot
const Hero = (props) => {
    return (
        <div id="hero" className="flex flex-col justify-center min-h-80h bg-fixed bg-sunset-pattern bg-cover px-20 lg:min-h-60h">
            <h1 className="text-5xl font-bold text-white text-center mb-2"> Weather! <i>Amiright??</i> </h1>
            <p className="text-1xl font-bold text-white text-center"> lorem ipsum text </p>
        </div>
    )
}

export default Hero;