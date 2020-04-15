import React, { useState, useEffect } from 'react';
import { Header, Segment } from 'semantic-ui-react'
import api from '../services/api';

const HeaderExampleBlock = () => {

    const [cities, setCities] = useState([]);
    const [cases, setCases] = useState(0);


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
            setCases(cases);
        }
        getAverage();
    }, [cities]);

    return (
        <div>
            <Header as='h2' attached='top'>
                Mapa do Coronavírus (COVID-19) em Santa Catarina
            </Header>
            <Segment attached>
                Em média, o número de casos de COVID-19 por município com pelo menos um caso é de {(cases / cities.length).toFixed(2)} casos.
            </Segment>
            <Segment attached>
                Os municípios com o número de casos maior que a média estadual estão em vermelho 📍
            </Segment>
        </div>
    )   
}

export default HeaderExampleBlock
