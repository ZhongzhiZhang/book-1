class App extends React.Component {
  render(){
    return (
      <div>
      	<MyComponents.NavBar 
      		user={this.props.data.user}
      		actions={this.props.actions}/>
      	<MyComponents.GroupList/>
      </div>
      );
  }
}

MyComponents.App = App;
