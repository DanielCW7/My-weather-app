import React, { useRef, useEffect, createElement, ReactDOM }from "react";
import Card from './card';

const Week = (props) => {

    // array of 7 days
    let data = props.val2;
    const test = () => {
        if(data) {
            return data.map(day => {
                let adjustedDate = day.datetimeStr.substring(0,10);
                return <Card key={day.datetime}  high={day.maxt} low={day.mint} rain={day.pop} date={adjustedDate}/>
            })
        } else {
            return
        }
    }

    const mounted = useRef();
        useEffect(() => {        
            const week = document.querySelector("#weekly");
            if (!mounted.current) {
            // do componentDidMount logic
                mounted.current = true;
                console.log("week mounted");
            } else if(mounted.current) {
            // do componentDidUpdate logic
                console.log(data);
                if(!data) {
                    // if no data is passed
                    return
                } else {
                    // if some data is passed, log it
                    console.log(data)
                }  
            }
        })

return (

        <ul className="flex flex-col md:flex-row" id="weekly" >
             {test()}
        </ul>
    )
}

export default Week

// let adjustedDate = item.datetimeStr.substring(0,10);
// <Card temp={item.temp} low={item.low} high={item.high} date={adjustedDate} precip={item.pop} />