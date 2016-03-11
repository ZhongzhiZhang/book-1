class App extends React.Component {
  render(){
    return (
      <div className="card">
      <p>
      	<MyComponents.GroupList groups={this.props.data.groups}/>
	  </p>
      </div>
      );
  }
}

MyComponents.App = App;
