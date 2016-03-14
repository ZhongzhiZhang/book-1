MyComponents.GroupList = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      groups: []
    };
  },
  componentWillMount: function() {
    var ref = new Firebase("https://drinktogether.firebaseio.com/groups/id");
    
    this.bindAsArray(ref, "groups");
  },
  render: function() {
  var groups = this.state.groups.map(function(group) {

  var rows = [];
  Object.keys(group.listOfUsers).forEach(function (listValue) {
  rows.push(<li key={listValue}>{listValue}</li>) })
  
    return (
      <tr key={ group['.key'] }>
        <td>{ group.name }</td>
        <td>{ group.bars }</td>    
        <td><ul>{ rows   }</ul></td>
        <td>{ group.date }</td>
      </tr>
    );
  });
  return (<table>
          <tbody>
          <tr>
            <th>Group Name</th>    
            <th>Destination</th>   
            <th>List of users</th>
            <th>Date</th>
          </tr>
          { groups }
          </tbody>
        </table>)
}
});
