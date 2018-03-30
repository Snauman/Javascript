//Api key: AIzaSyDsYxGa_MxZNomfi_MAFCq3C00NEeowiyE
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 1,
           mapTypeId: 'terrain'
        });
      }
