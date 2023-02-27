import React, { useState } from "react";
import Form from "../components/form";
import Today from "../components/todayWeather";
import Week from "../components/week";

const Forecast = () => {

    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");

    return (
            <div className="bg-lightning-pattern bg-center bg-cover bg-fixed min-h-auto justify-center">
                <div className="p-10 bg-gradient-to-b via-black-0 from-white">
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