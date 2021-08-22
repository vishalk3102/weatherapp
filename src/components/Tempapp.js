import React, { useState, useEffect } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("pune");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4d964f340ebcbd2d5ae364e2daf560e0`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="text"
            className="inputField"
            placeholder="Enter place name"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No data found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tempapp;
