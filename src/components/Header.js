import React from 'react';

export default function Header({onClick, onChange}){
    return (
        <div className="search-form">
        <input type="text" placeholder="Yogyakarta" name="city" onChange={onChange}/>
        <button onClick={onClick}>Search</button>
        </div>
    )
}
