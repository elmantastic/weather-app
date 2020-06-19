import React from 'react';
import {FaCalendarAlt, FaRegClock } from 'react-icons/fa';

export default function Weathers({data}){

    const weather = data;

    const d = new Date(weather.date);
    const date = d.getUTCDate() + '-' + d.getUTCMonth() + '-' + d.getUTCFullYear();
    const img = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;


    return (
        <div className='content-container'>
            <div className="img-container">
            <img src={img} alt=""/>
            </div>
            <div className="time-container">
                <div className="date">
                    <FaCalendarAlt/>
                    <span>{date}</span>
                </div>
                <div className="clock">
                    <FaRegClock/>
                    <span>{weather.date.substring(11,16)}</span>
                </div>
            </div>
            <div className="suhu-container">
                <h2 className={(weather.temp > 30)? ((weather.temp >= 35)? 'hot' :'warm') :'cold'}>{weather.temp}&deg;C</h2>
                <h5>Min: {weather.minTemp}&deg;C - Max: {weather.maxTemp}&deg;C</h5>
            </div>
            <div className="info-container">
                <h3>{weather.main}</h3>
                <h4>{weather.des}</h4>
            </div>
        </div>
    )
}