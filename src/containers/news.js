import React from 'react';
import Story from '../components/story';
// import news sections

const News = () => {
    return (
        <div className="p-10">
            <div className="mb-5">
                <h3 className="text-4xl font-bold text-center"> What's... <i>New?</i> ha </h3>
            </div>
            <div className="flex flex-wrap flex-grow justify-center gap-5">

                <Story />
                <Story />
                <Story />
                <button className="border-2 border-blue-300 rounded-lg flex flex-grow justify-center py-2 text-blue-300 font-bold" type="submit"> More </button>
            </div>
        </div>
    )
}  

export default News