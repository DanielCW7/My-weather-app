import React, { useRef, useEffect, createElement, ReactDOM }from "react";
import Card from './card';

class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: []
        }
        this.populate = this.populate.bind(this);
    }


    populate() {
    }

render() { 
    // const days = this.state.days.map(day => {
    //     return  <Card temp={item.temp} low={item.low} high={item.high} date={adjustedDate} precip={item.pop} />
    // })  

    return (

            <ul className="flex flex-row justify-center" id="weekly" >
                <Card />
                <Card />
            </ul>
    )
    }
}

export default Week

// let adjustedDate = item.datetimeStr.substring(0,10);
// <Card temp={item.temp} low={item.low} high={item.high} date={adjustedDate} precip={item.pop} />