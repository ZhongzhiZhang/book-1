MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav className="black">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">
                  Bar Crawl Planning
                </a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="map.html">Map</a></li>
                    <li><a href="group.html">Group</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="map.html">Map</a></li>
                    <li><a href="group.html">Group</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </div>
        </nav>
    );
  }
});
