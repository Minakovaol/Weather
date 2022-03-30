import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertActions';
import { getWeather } from '../store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }

    dispatch(getWeather(city));
    setCity('');
  }

  return(
    <div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form onSubmit={submitHandler}>
            <input 
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter city name"
              style={{maxWidth: 200}}
              value={city}
              onChange={changeHandler}
            />
            <button className="button is-fullwidth" style={{maxWidth: 100, margin: '0 auto'}}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );  
}

export default Search;