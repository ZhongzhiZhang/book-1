class App extends React.Component {
  render(){
    return <div>
      <div className="card">

      <MyComponents.GroupList groups={this.props.data.groups}/>


    </div>;
  }
}

MyComponents.App = App;
