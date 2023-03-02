import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./components/Search";
import Week from "./components/Week";
import Chart from "./components/Chart";
import apiKey from "../config.json";

function App() {
    const [dayWeatherDetail, SetDayWeatherDetail] = useState<any>([]);
    const [weatherDetail, SetWeatherDetail] = useState<any>([]);
    const [lat, setLat] = useState<any>([]);
    const [long, setLong] = useState<any>([]);
    const [city, setCity] = useState<any>([]);

    const apiKey = ;

    const GetWeatherDetail = async () => {
        const weatherDetailResult = await fetch(`https://api.weatherbit.io/v2.0/current?&lat=38.123&lon=-78.543&key=${apiKey}&include=minutely`);
        const data = await weatherDetailResult.json();
        SetWeatherDetail(data)

        console.log(data);
        const dayWeatherDetailResult = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&key=${apiKey}&include=minutely`);
        const dayData = await dayWeatherDetailResult.json();
        SetDayWeatherDetail(dayData)
    }

useEffect(() => {
    GetWeatherDetail();
}, []);

    return <div className = "App">
        <Search setCity={setCity}/>
        <Week dayWeatherDetail={weatherDetail}/>
        <Chart/>
        </div>;
}

export default App;
