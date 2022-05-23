import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';
import "./../src/App.css";

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
          <div className="has-text-white is-family-monospace is-italic">
            <Search title="Enter city" />
              { weatherData && <Weather data={weatherData} />}
              {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
              {error && <Alert message={error} onClose={() => dispatch(setError())} />}
          </div>    
   );
}

export default App;
