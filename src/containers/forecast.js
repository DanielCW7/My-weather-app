import React, { useState } from "react";
import Form from "../components/form";
import Today from "../components/todayWeather";
import Week from "../components/week";

const Forecast = () => {

    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");

    return (
            <div className="bg-rain-pattern bg-cover bg-fixed min-h-screen flex flex-col justify-center">
                <div className="flex flex-col p-10 bg-gradient-to-b via-black-500 from-white">
                    <Form today={setVal} week={setVal2}/>
                    <Today val={val}/>
                </div>
                <div className="flex flex-row justify-center">
                    <Week val2={val2}/>
                </div>
            </div>
    )
}

export default Forecast