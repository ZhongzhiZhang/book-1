MyComponents.Login = React.createClass({
  render: function() {
    if (this.props.user){
      // user is authenticated
      return <div className="center-align">
          <h5>Hello {this.props.user.displayName}!</h5>
          
          <a href="#" className="black white-text waves-effect waves-light btn " onClick={this.props.logoutAction}>Logout</a>
      </div>
    }
    else{
        return (
        <div className="container">
            <div className="row">
              <div className="col m6 offset-m3">
                    <h2 className="center-align">Login</h2>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate"></input>
                                    <label for="email">Email or Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="pass" type="password" className="validate"></input>
                                    <label for="pass">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <p>
                                        <input type="checkbox" id="remember"></input>
                                        <label for="remember">Remember me</label>
                                    </p>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col m4 s12 center">
                                        <button className="btn btn-large waves-effect waves-light black" type="button" name="action">Login</button>
                                </div>
                                <div class="container">
                                    <a className="waves-effect waves-light btn center" href='#' onclick=onClick={this.props.loginAction}>Google Login </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }
  }
});
