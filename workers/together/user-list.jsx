
MyComponents.User = React.createClass({
 render: function() {
  var status = this.props.user.status;
  if (status === "online"){
    if (Date.now()-this.props.user.lastActive>=300000){
      status = "Not Active"
    };
  };
   
   return (
        <tr>
          <td>{this.props.user.name}</td>
          <td>{status}</td>
        </tr>
   );
 }
});


MyComponents.UserList = React.createClass({
  render: function() {

    var users = this.props.users.map(function(u,i){
        return <MyComponents.User user={u} key={i}/>
    })

    return (
      <div>
        <h3>Clients</h3>
        <table>
          <thead>
            <tr>
              <th data-field="name">Name</th>
              <th data-field="online">Online</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
});