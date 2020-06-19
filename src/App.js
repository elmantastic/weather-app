import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LiveWeather from './components/LiveWeather';
import Weathers from './components/Weathers';
import Title from './components/Title';

function App() {

  // api information from openweather
  const apiUrl = 'https://api.openweathermap.org/data/2.5/';
  const apiKey = '104baf263dafef33e954a0577afde716';

  // get the functions from the context
  // const weathers = useContext(WeatherContext);

  const [city, setCity] = useState();
  const [Loading, setLoading] = useState(false);
  const [weathers, setWeathers] = useState([]);
  const [liveWeather, setLiveWeather] = useState([]);


  const getWeather = async () => {
    setLoading(true);
    getLiveWeather();
    const res = await fetch(apiUrl + 'forecast?q=' + city + '&appid=' + apiKey + '&units=metric');
    const data = await res.json();
    let weathers = formatData(data.list);
    setWeathers(weathers);
    setLoading(false);
    // console.log(weathers);
  }

  const getLiveWeather = async () => {
    const res = await fetch(apiUrl + 'weather?q=' + city + '&appid=' + apiKey + '&units=metric');
    const data = await res.json();
    let weather = formatWeather(data);
    setLiveWeather(weather);
    // console.log(weather);
  }

  const updateCity = (e) => {
    setCity(e.target.value);
    // context.city = e.target.value;
  }

  const formatWeather = (data) =>{
      let icon = data.weather[0].icon;
      let temp = data.main.temp;
      let minTemp = data.main.temp_min;
      let maxTemp = data.main.temp_max;
      let main = data.weather[0].main;
      let des = data.weather[0].description;

      return [{icon, temp, minTemp, maxTemp, main, des}];
  }


  const formatData = (items) =>{
    const newData = items.map(item => {
      let icon = item.weather[0].icon;
      let date;
      if(typeof item.dt_txt !== 'undefined'){
         date= item.dt_txt;
      }
      let temp = item.main.temp;
      let minTemp = item.main.temp_min;
      let maxTemp = item.main.temp_max;
      let main = item.weather[0].main;
      let des = item.weather[0].description;

      let weather = {icon, date, temp, minTemp, maxTemp, main, des};

      return weather;
    })
    return newData;
  }

  const getTitle = (title) => {
    if(weathers.length !== 0 && liveWeather.length !== 0){
      return (
        <Title title={title}/>
      )
    }
  }

  // const showLiveWeather = () => {
  //   if(liveWeather.length !== 0){
  //     console.log(liveWeather);
  //     return (
  //       <LiveWeather data={liveWeather}/>
  //     )
  //   }
  // }

  return (
    <div className="container">
      <Header onChange={updateCity} onClick={getWeather}/>
      <div className="content">
          <div className={Loading?'spinner':''}></div>
          <div className={Loading?'dark noShadow':''}> 
            {getTitle("Cuaca Sekarang")}
            {liveWeather.map((item,index) => (
                <LiveWeather data={item} key={index} />
            ))}
            {getTitle("Ramalan Cuaca")}
            <Weathers data={weathers}/>
          </div>
      </div>
    </div>
  );
}

export default App;
