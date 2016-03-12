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
    return (
      <tr key={ group['.key'] }>
        <td>{ group.name }</td>
        <td>{ group.bars }</td> 
        <td>{ group.size }</td> 
        <td>{ group.date }</td>
      </tr>
    );
  });
  return (<table>
          <tr>
            <th>Group Name</th>    
            <th>Destination</th>   
            <th>Size</th>  
            <th>Date</th>
          </tr>
          { groups }
        </table>)
}
});