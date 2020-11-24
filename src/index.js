import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYW5kcmVzNTQiLCJhIjoiY2todXR1enlqMDltYjJxbWw4dnp4aDZrYyJ9.rP9cSw3nVs_ysNYCemYwKw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const element = document.createElement('div')
element.style.width = "32px";
element.style.height = "39px";
element.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"

new mapboxgl.Marker(element).setLngLat([-74.009151, 40.705086]).addTo(map);

