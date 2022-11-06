function initMap() {
    
    const pgu13A = { lat: 46.99273701745462, lng: 32.0002221031647 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: pgu13A,
    });
    const marker = new google.maps.Marker({
      position: pgu13A,
      map: map,
    });
  }