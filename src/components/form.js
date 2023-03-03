import React from "react";
import sun from '../images/sun.png'

const Form = ({today, week}) => {

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

    // future forecast 7 days
    const forecast = (info, name) => {
        const list = []
        const region = info?.locations[name]?.values ?? "error"

        for(let i = 1; i <= 7; i++) {
            list.push(region[i])
            console.log(list)
        }

        console.log(list, "this week!")
        week(list)
    }

    // form event listener
    const submit = async (event) => {
        event.preventDefault();
        let locationName = document.querySelector("#location").value;
    
    //     const options1 = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '7bc079f762mshb12917c96b76497p18bbd5jsn5f15a86d83f3',
    //             'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //         }
    //     };

    //     const options2 = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '98a8341ffcmsh7a4d6c17a49f6ecp153be9jsn0d3a5abcccce',
    //             'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    //         }
    //     };

    //     // for today's date
    //     const getToday = async () => {
    //         try {   
    //             const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${locationName}`, options1)
    //             const info = await response.json()
    //                 console.log(info)
    //                 data(info)
    //         } catch(error) { 
    //             throw "An error occurred when trying to fetch today's weather data"
    //         }
    //     }

    //     // for weekly forecast
    //     const getWeek = async () => {
    //         try {
    //             const response = await fetch(`https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${locationName}&contentType=json&unitGroup=us&shortColumnNames=0`, options2)
    //             const info = await response.json()
    //                 console.log(info)    
    //                 forecast(info, locationName)
    //         } catch(error) {
    //             throw "An error occurred when trying to fetch weather data of the next 7 days"
    //         }
    // }
    //     getToday()
    //     getWeek()
    }

    return (
        <form onSubmit={submit} id="search" className="flex flex-col mb-10 md:w-60 lg:w-40">
            <h3 className="text-4xl font-bold"> How's the weather in... </h3>
            <p> Enter a location below to get the most up-to-date weather data. </p>
            <div className="mt-10 flex">
                <input id="location" type="text" className=" flex-grow p-[10px] bg-gray-100" placeholder="Enter a location"></input>
                <button className="bg-blue-300 p-[10px]" type="submit"> submit </button>
            </div>
        </form>
    )

}

export default Form