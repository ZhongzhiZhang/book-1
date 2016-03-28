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
        <td align="center" width="1px"><a onClick={function() {alert(group.groupID); 		
					var session = window.localStorage["firebase:session::drinktogether"];
					var seesionObj = JSON.parse(session);
					var username = seesionObj['google'].displayName;alert(username);
					
					var Bar = group.bars;
    					var ref = new Firebase('https://drinktogether.firebaseio.com/groups/id/' + group.groupID + '/listOfUsers');
				     			
					ref.child(username).child(Bar).set({
					StartTime: "15:00",
					EndTime: "18:00",
   					 });
					
					var ref2 = new Firebase('https://drinktogether.firebaseio.com/users/');
						ref2.child(username).set({
        					lat: '40.01839183647418',
        					lon: '-105.28007901566103',
        					name: username,
        					isGroupOwner: 'False',
						groupID: group.groupID,
    					});
				}
					
			} 
			href='map.html' className="secondary-content"><i className="material-icons">send</i></a></td>
        
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
            <th>Access group</th>
          </tr>
          { groups }
          </tbody>
        </table>)
}
});

