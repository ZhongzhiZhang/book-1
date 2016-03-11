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
      <li key={ group['.key'] }>
        <b>{ group.name }</b> is going to { group.bars } and has {group.size} people with them
      </li>
    );
  });
  return <ul>{ groups }</ul>;
}
});