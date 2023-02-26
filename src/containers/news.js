import React from 'react';
import Story from '../components/story';
// import news sections

const News = () => {
    return (
        <div>
            {/* individual news stories */}
            <div>
                <h3 className="text-4xl font-bold"> What's... <i>New?</i> ha </h3>
            </div>
            <div className="flex flex-wrap flex-grow min-h-80h justify-center gap-5 px-5 py-10">

            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />

        </div>
        </div>
    )
}  

export default News