import React, { useState, useEffect } from 'react';
import MarkerRed from './MarkerRed';
import MarkerBlue from './MarkerBlue';
import api from '../../services/api';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

function MapComponent() {

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
    <div>
      <Map center={[-28.268, -51.90]} zoom={7} >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true} />
          {cities.map((city, index) => {
          return city.casos > average ?
          <Marker 
          key={index}
          icon={MarkerRed}
          position={[city.latitude, city.longitude]}>
                  <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
          :
          <Marker
          key={index}
          icon={MarkerBlue}
          position={[city.latitude, city.longitude]}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        })}
      </Map>
    </div>
  );
}

export default MapComponent;