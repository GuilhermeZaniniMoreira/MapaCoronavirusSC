import L from 'leaflet';

const MarkerRed = new L.Icon({
    iconUrl: require('../../img/red.svg'),
    iconRetinaUrl: require('../../img/red.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75)
});

export default MarkerRed;
