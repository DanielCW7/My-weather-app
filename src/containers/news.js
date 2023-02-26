import React from 'react';
import Story from '../components/story';
// import news sections

const News = () => {
    return (
        <div className="p-10">
        {/* individual news stories */}
            <div className="mb-5">
                <h3 className="text-4xl font-bold text-center"> What's... <i>New?</i> ha </h3>
            </div>
            <div className="flex flex-wrap flex-grow justify-center gap-5">

                <Story />
                <Story />
                <Story />
                <Story />

            </div>
        </div>
    )
}  

export default News