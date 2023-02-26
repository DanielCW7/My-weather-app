import React, { useState } from "react";
import Form from "../components/form";
import Today from "../components/todayWeather";
import Week from "../components/week";

const Forecast = () => {

    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");

    return (
            <div className="bg-city-pattern bg-cover bg-fixed min-h-70h flex flex-col justify-center">
                <div className="flex flex-row justify-around min-h-30 p-10">
                    <Form today={setVal} week={setVal2}/>
                    <Today val={val}/>
                </div>
                <div className="flex flex-row justify-around min-h-70 p-10">
                    <Week val2={val2}/>
                </div>
            </div>
    )
}

export default Forecast