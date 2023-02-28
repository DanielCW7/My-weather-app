import React from 'react';
import Story from '../components/story';


// only for the news page
const NewsExpanded = (props) => {
    return (
        <div className="p-10 md: min-h-60h">
            <div className="mb-10">
                <h3 className="text-4xl font-bold text-center"> Stay in the loop.</h3>
            </div>
            <div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-5 xl:grid-cols-4">
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>

                </div>
                <button className="border-2 border-blue-300 py-2 rounded-lg block min-w-full text-blue-300 font-bold md:m-auto md:min-w-min md:w-10" type="submit"> More </button>
            </div>
        </div>
    )
}  

export default NewsExpanded