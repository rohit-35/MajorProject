//<script>
  var map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`,
    center: coordinates,
    zoom: 6
  });  //</script>

console.log("Ram",coordinates);
//Marker with popup:
const popup = new maplibregl.Popup({ offset: 25 }).setText(
  "Exact Location will be provided after booking"
);

new maplibregl.Marker( {color: 'Red'})
  .setLngLat(coordinates)  //listing.geometry.coordinates
  .setPopup(popup)
  .addTo(map);