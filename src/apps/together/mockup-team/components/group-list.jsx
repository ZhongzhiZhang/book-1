
MyComponents.Group = React.createClass({
 render: function() {
   return (

        <tr>
          <td>{this.props.group.name}</td>
          <td>{JSON.stringify(this.props.group.size)}</td>
          <td>{JSON.stringify(this.props.group.date)}</td>
        </tr>


   );
 }
});


MyComponents.GroupList = React.createClass({
  render: function() {

    var groups = this.props.groups.map(function(p,i){
      return <MyComponents.Group group={p} key={i}/>
    })

    return (
      <div>
        <h3>Groups</h3>
        <table>
          <thead>
            <tr>
              <th data-field="name">Name</th>
              <th data-field="size">Size</th>
              <th data-field="date">Date</th>
            </tr>
          </thead>
          <tbody>
            {groups}
          </tbody>
        </table>
      </div>
    );
  }
});

