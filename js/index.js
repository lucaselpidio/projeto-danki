// Initialize and add the map
function initMap() {
    // The location of Ponta Grossa
    const location = { lat: -25.094700, lng: -50.163158 };
    // The map, centered at Ponta Grossa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
    });
    // The marker, positioned at Ponta Grossa
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  window.initMap = initMap;