/* Example from Leaflet Quick Start Guide*/

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//assign token, map data, tile layer, id
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmNsdWV0dDk2IiwiYSI6ImNqczlicXQyMTBvbTM0M215cnFrM2Fxb3oifQ.JCVn7_XegiPFFQSN0H3Kvg'
}).addTo(mymap);
//add marker
var marker = L.marker([51.5, -0.09]).addTo(mymap);
//add circle, including color, opacity, radius
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
//add polygon by specifying points
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);
//add popups of shapes
marker.bindPopup("<strong>Hello world!</strong><br />I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
//set coordinates and text of additional pop up
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();
//set coordinates and text of additional pop up
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
//turn on clicker function
mymap.on('click', onMapClick);