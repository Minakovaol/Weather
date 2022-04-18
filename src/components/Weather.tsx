import React, { FC } from 'react';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const celsiusMin = (data.main.temp_min - 273.15).toFixed(2);
  const celsiusMax = (data.main.temp_max - 273.15).toFixed(2);  

  return(
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered" style={{marginBottom: 100}}>{data.name} - {data.sys.country}</h1>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <div>
              <p className="notification is-info">Temp</p>
              <div className="title">
                <div className="tag is-info is-light">Minimum temperature</div>
                <p>{celsiusMin}<sup>&#8451;</sup></p>
                <div className="tag is-info is-light">Maximum temperature</div>
                <p>{celsiusMax}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="notification is-info">Humidity</p>
              <p className="title">{data.main.humidity} % </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="notification is-info">Pressure</p>
              <p className="title">{data.main.pressure} hPa</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="notification is-info">Wind</p>
              <p className="title">{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
            <div>
              <p className="tag is-info is-light is-large">{data.weather[0].description}</p>
              <p className="title is-1"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
            </div>
          </div>
    </section>
  );
}

export default Weather;