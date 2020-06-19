import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
    const [city, setCity] = useState();
    const [loading, setLoading] = useState(false);
    const [weathers, setWeathers] = useState([]);

    return(
        <WeatherContext.Provider value={[
            city,
            setCity,
            weathers,
            setWeathers,
            loading,
            setLoading
            ]}>
            {props.children}
        </WeatherContext.Provider>
    )
}