import React from 'react'
import Weather from './Weather';

export default function Weathers({data}) {
    return (
        <div>
            {data.map((item, index) => (
                <Weather data={item} key={index}/>
            ))}
        </div>
    )
}
