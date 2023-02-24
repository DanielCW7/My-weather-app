import React from "react";
import sun from '../images/sun.png'

const form = ({today, week}) => {

    // today's weather
    const data = (info) => {
        let { temp_f, temp_c, feelslike_f, feelslike_c, humidity, wind_mph } = info?.current ?? "no data";
        let image = info?.current?.condition?.icon ?? sun;
        let todayDate = info?.location?.localtime ?? "?";    
        let updateddata = {
            stats: [
                feelslike_c = feelslike_c,
                feelslike_f = feelslike_f,
                temp_c = temp_c,
                temp_f = temp_f,
                humidity = humidity,
                wind_mph = wind_mph
            ],
            date: todayDate,
            icon: image,
            cloud: info?.current?.cloud ?? "?"
        }
        today(updateddata)
    }

    // future forecast, in this case only 3 days
    const forecast = (info, name) => {
        const list = []
        const region = info?.locations[name]?.values ?? "error"

        for(let i = 0; i <= 6; i++) {
            list.push(region[i])
        }

        console.log(list, "this week!")
        week(list)
    }

    // form event listener
    const submit = (event) => {
        event.preventDefault();
        let locationName = document.querySelector("#location").value;
    
        const options1 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7bc079f762mshb12917c96b76497p18bbd5jsn5f15a86d83f3',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        const options2 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '98a8341ffcmsh7a4d6c17a49f6ecp153be9jsn0d3a5abcccce',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        // for today's date
        fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${locationName}`, options1)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                data(response)
            })
            .catch(err => console.error(err));

        // for weekly forecast
        fetch(`https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${locationName}&contentType=json&unitGroup=us&shortColumnNames=0`, options2)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            forecast(response, locationName)
        })
        .catch(err => console.error(err));
    }

    return (
        <form onSubmit={submit} id="search" className="flex flex-col justify-center max-w-1/3">
            <h2 className="text-4xl font-bold"> How's the weather in... </h2>
            <p> enter the location below to get the most up-to-date weather data </p>
            <div className="mt-10">
                <input id="location" type="text" className="p-[10px] bg-gray-200" placeholder="Enter a location"></input>
                <button className="bg-blue-300 p-[10px]" type="submit"> submit </button>
            </div>
        </form>
    )

}

export default form