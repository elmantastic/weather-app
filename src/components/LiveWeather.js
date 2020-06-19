import React from 'react'

export default function LiveWeather({data}) {

    const weather = data;

    const img = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    return (
        <div className='content-container'>
            <div className="img-container">
            <img src={img} alt=""/>
            </div>
            <div></div>
            <div className="suhu-container">
                <h2 className={(weather.temp > 30)? ((weather.temp >= 35)? 'hot' :'warm') :'cold'}>{weather.temp}&deg;C</h2>
                <h5>Min: {weather.minTemp}&deg;C - Max: {weather.maxTemp}&deg;C</h5>
            </div>
            <div className="info-container">
                <h3>{weather.main}</h3>
                <h4>{weather.des}</h4>
            </div>
            {/* <button onClick={test} className="big">dsa</button> */}
        </div>
    )
}
