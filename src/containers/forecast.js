import React, { useState } from "react";
import Form from "../components/form";
import Today from "../components/todayWeather";
import Week from "../components/week";

const Forecast = () => {

    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");
console.log(val, val2)
    return (
            <div className="bg-sunny2-pattern bg-bottom bg-cover bg-fixed min-h-auto flex flex-col justify-end md:min-h-80h">
                <div className="p-10 bg-gradient-to-b via-white-200 from-white justify-between flex-auto md:bg-gradient-to-br">
                    <Form today={setVal} week={setVal2}/>
                    <Today val={val}/>
                </div>
                <div className="flex flex-row justify-center border md:grid md:grid-cols-1">
                    <Week val2={val2}/>
                </div>
            </div>
    )
}

export default Forecast