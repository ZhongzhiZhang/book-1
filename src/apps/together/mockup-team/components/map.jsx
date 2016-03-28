const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class MapView extends React.Component {
  render(){
    const bars = this.props.businesses
  

    const barElements = _.map(bars, function(u,i){
      var pos = [u.location.coordinate.latitude,u.location.coordinate.longitude];
      var u_icon = L.icon({
      iconUrl: '../images/beerIcon.png',
      iconSize: [40, 40],
      iconAnchor: [0, 40],
      popupAnchor: [20, -30]
      })
      var mapURL = "http://www.google.com/maps/place/" + u.location.coordinate.latitude + "," + u.location.coordinate.longitude; 
      return <Marker position={pos} key={i} icon={u_icon}>
        <Popup>
          <span><b> {u.name} </b>
          <br>
          <a  target="_blank" href={u.mobile_url}>Link to Website</a> 
          <br></br>
          <a  target="_blank" href= {mapURL} >Link Google Maps</a>
          </br>
          Rating: {u.rating}
          </span>
        </Popup>
      </Marker>
    })


    // Note: .bind(this) is important for the handler function's 'this'
    // pointer to refer to this MapView instance

    return  <Map center={this.props.center}
          zoom={14}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {barElements}
      </Map>
  }
}

MyComponents.MapView = MapView