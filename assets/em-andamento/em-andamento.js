let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -22.9111745, lng: -43.2057713},
    zoom: 13,
  });
}