import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import api from '../../services/api';
require('dotenv').config({path: __dirname + '/.env'})

function Map() {

  const [cities, setCities] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    async function loadCities() {
      const response = await api.get('/cities');
      setCities(response.data);
    }
    loadCities();
  }, []);

  useEffect(() => {
    async function getAverage() {
        var cases = 0;
        cities.map((city, index) => {
            cases += city.casos;
        })
        setAverage(cases / cities.length);
    }
    getAverage();
  }, [cities]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDSFU_doLYrjt74AjU8zpw1yK26dO8gJqA' }}
        defaultCenter={{
          lat: -27.268,
          lng: -51.90}}

        defaultZoom={7}
      >
        {cities.map((city, index) => {
          return city.casos > average ? <Marker
          key={index}
          lat={city.latitude}
          lng={city.longitude}
          name={city.nome + `: número de casos: ${city.casos}`}
          color="red" /> :

          <Marker
          key={index}
          lat={city.latitude}
          lng={city.longitude}
          name={city.nome + `: número de casos: ${city.casos}`}
          color="blue" />
          
        })}

      </GoogleMapReact>
    </div>
  );
}

export default Map;