MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <li>{this.props.groups.id}</li>
    );
  }

});

MyComponents.GroupData = React.createClass({
  render: function() {
    var name = this.props.group.id.name(function(s,i){
      return <MyComponents.GroupData bar={s} key={i}/>
    })

    var bars = this.props.group.id.bars(function(s,i){
      return <MyComponents.GroupData name={s} key={i}/>
    })

    var groupSize = this.props.group.id.size(function(s,i){
      return <MyComponents.GroupData size={s} key={i}/>
    })

    var date = this.props.group.id.date(function(s,i){
      return <MyComponents.GroupData date={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        <h4>Bar</h4>
        <ul>
        {bars}
        </ul>
        
        <h2>Members</h2>
        <ul>
        {groupSize}
        </ul>

        <h2>Date</h2>
        <ul>
        {date}
        </ul>

        </div>
      </div>
    );
  }
});