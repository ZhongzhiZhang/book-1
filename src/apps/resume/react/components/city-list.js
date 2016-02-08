MyComponents.City = React.createClass({

  render: function() {
    
    var city = this.props.city
    return (
      <div className="col s4">
        <div className="card green lighten-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.name}</span>
              <ul className="collection black-text">
                <li className="collection-item">{city['currently']['summary'] }</li>
                  <li className="collection-item">Chance of rain/snow/sleet : {(city['currently']['precipProbability'] * 100)}%</li>                               
                  <li className="collection-item">Humidity is: {(city['currently']['humidity']*100)}%</li>
                  <li className="collection-item">Visability is: {city['currently']['visibility']} miles</li>
                  <li className="collection-item">Temperature is: {city['currently']['temperature']} Fahrenheit</li>
                  <li className="collection-item">Cloud Cover is: {(city['currently']['cloudCover']*100)}%</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var displaycities = [];
    
    for( var key in this.props.cities){
      if (this.props.cities.hasOwnProperty(key)) {
        var tempCity = this.props.cities[key];
        var temp = <MyComponents.City city={tempCity} name={key} key={key}/>
        displaycities.push(temp);

      }
    }

    return (
      <div className="card green darken-3">
        <div className="card-content white-text">
          <div className="row">
          {displaycities}
          </div>
        </div>
      </div>
    );
  }
});