MyComponents.Login = React.createClass({
  render: function() {
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
                                    <label for="email">Email</label>
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
                                <div className="col m12">
                                    <p className="right-align">
                                        <button className="btn btn-large waves-effect waves-light black" type="button" name="action">Login</button>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});
