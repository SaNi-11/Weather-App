import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './layout/assets/Button';
import { AuthContext } from '../context/AuthContext';

const Api_key = '0daa93af18d0d94b16cec5ba3a23123e';

const WeatherWidget = () => {
  const inputRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const WeatherTypes = [
    {
      type: 'Clear',
      img: 'https://cdn-icons-png.flaticon.com/512/6974/6974833.png',
    },
    {
      type: 'Rain',
      img: 'https://cdn-icons-png.flaticon.com/512/3351/3351979.png',
    },
    {
      type: 'Snow',
      img: 'https://cdn-icons-png.flaticon.com/512/642/642102.png',
    },
    {
      type: 'Clouds',
      img: 'https://cdn-icons-png.flaticon.com/512/414/414825.png',
    },
    {
      type: 'Haze',
      img: 'https://cdn-icons-png.flaticon.com/512/1197/1197102.png',
    },
    {
      type: 'Smoke',
      img: 'https://cdn-icons-png.flaticon.com/512/4380/4380458.png',
    },
    {
      type: 'Mist',
      img: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png',
    },
    {
      type: 'Drizzle',
      img: 'https://cdn-icons-png.flaticon.com/512/3076/3076129.png',
    },
  ];

  const fetchWeather = async () => {
    const location = inputRef.current.value;
    if (location) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${Api_key}`
        );
        const data = await response.json();
        if (data.cod === 404 || data.cod === 400) {
          setApiData(null);
        } else {
          setApiData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBackClick = () => {
    setApiData(null);
    inputRef.current.value = '';
  };

  return (
    <div className="bg-gray-400 transition ease-in-out delay-550 dark:bg-gray-800 h-full grid place-items-center">
      <div className="bg-white w-96 hover:shadow-xl p-4 rounded-md">
        <div className="container text-center text-indigo-700 items-center font-medium">
          <div className="transition ease-in-out delay-550 hover:text-indigo-400 font-bold mb-2">
            <Link to="/about">Welcome {user.fname}</Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter Your Location"
            className="text-xl border-b p-1 border-gray-200 font-semibold uppercase flex-1"
          />
          {apiData ? (
            <Button onClick={handleBackClick}>Back</Button>
          ) : (
            <button onClick={fetchWeather}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
                alt="..."
                className="w-8 pl-2"
              />
            </button>
          )}
        </div>
        {loading ? (
          <div className="grid place-items-center h-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png"
              alt="..."
              className="w-14 mx-auto mb-2 animate-spin"
            />
          </div>
        ) : apiData ? (
          <div className="text-center flex flex-col gap-6 mt-10">
            <p className="text-xl font-semibold">
              {apiData.name}, {apiData.sys.country}
            </p>
            <img
              src={
                WeatherTypes.find((w) => w.type === apiData.weather[0].main)
                  ?.img
              }
              alt="..."
              className="w-52 mx-auto"
            />
            <h3 className="text-2xl font-bold text-zinc-800">
              {apiData.weather[0].main}
            </h3>
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                alt="..."
                className="h-9 mt-1"
              />
              <h2 className="text-4xl font-extrabold">
                {apiData.main.temp}&#176;C
              </h2>
            </div>
          </div>
        ) : (
          <div className="h-0"></div>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
