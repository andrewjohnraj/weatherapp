import React, { useEffect,useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import{Temp} from "./icons8-sun.gif";

import "./card.css";
function WeatherCard() {
    let apikey = "7463cf585600d31504bc0e402c495a85";
    const[loc,setLoc]=useState("Madurai");
    const[apiData, setApiData]=useState();
    useEffect(() => {
        const apiCall = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`);
        
        const data = apiCall.then((res) => res.json());
        data.then((item) =>{
        //console.log(item);
        setApiData(item)});
    },[loc]);
    const handleSubmit=(data)=>{
        data.preventDefault();
        console.dir(data.target[0].value);
        setLoc(data.target[0].value);
    }
    console.log(apiData)
    //console.log(apiData.weather[0].main)
    return (
        //______________________ over all container___________________
        <div className="background">
            {/* _____________________container_____________________ */}
            <div className="container">
                <h1>Weather Card</h1> 
                <form onSubmit={(e)=>handleSubmit(e)}><input type='text' name="city" placeholder="Enter the city"/>
                <button type="submit">Submit</button>
                </form>
                {/*____________________ card ________________________*/}
                <div className="card">
                    <h2>{apiData?.name}</h2>
                    <img width="148" height="148" src="https://img.icons8.com/fluency/48/cloud.png" alt="cloud" />
                    <h3> {apiData?.weather[0].main}</h3>
                    {/* <img src={Temp}></img> */}

                    {/* ----------------------detail------------------- */}
                    <div className="detail">
                        <div className="tem">
                            <h3>Temperature</h3>
                            <div><img width="48" height="48" src="https://img.icons8.com/fluency/48/temperature.png" alt="temperature" /></div><div><h3>{apiData?.main.temp}</h3></div>
                        </div>
                        <div className="hum">
                            <h3>Humidity</h3>
                            <div><img width="48" height="48" src="https://img.icons8.com/fluency/48/humidity.png" alt="humidity" /></div><div><h3>{apiData?.main.humidity}</h3></div>
                        </div>
                        <div className='wind'>
                            <h3>Wind Speed</h3>
                            <div><img width="48" height="48" src="https://img.icons8.com/fluency/48/wind.png" alt="windspeed" /></div><div><h3>{apiData?.wind.speed}</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherCard;