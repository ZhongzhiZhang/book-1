MyComponents.About = React.createClass({

  render: function() {
    // console.log(this.props.data.Name)
    var name = this.props.data.Name
    var email = "mailto:" + this.props.data.email
    var blurb = this.props.data.Blurb
    var github = this.props.data.github
    var linkedin =  this.props.data.LinkedIn
    var website = this.props.data.website

  // console.log('contact_info', this.props )
    return (
       <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4">
              <img src="me.jpg" alt="Pic of Zachary Lamb" className="circle responsive-img" /> 
            </div>
            <div className="col s8">
              <span className="center black-text">
                <h1>
                  {name}
                </h1>
                <p className="center">
                  {blurb}
                </p>
                <div className="container">
                   <div className="row">
                      <div className="center col s4">
                        <a href={email}>
                          <i className="large material-icons">email</i>
                          <p className=" promo-caption">Email</p>
                        </a>
                      </div>
                      <div className="col s4">
                        <a href={github}>
                          <i className="large material-icons">code</i>
                          <p className=" promo-caption">Github</p>
                        </a>
                      </div>
                      <div className="col s4">
                        <a href={website} target="_blank">
                          <i className="large material-icons">web</i>
                          <p className=" promo-caption">Website</p>
                        </a>
                    </div>
                </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
