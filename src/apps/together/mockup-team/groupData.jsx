MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <li>{this.props.groups.id}</li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var bars = this.props.group.id.name(function(s,i){
      return <MyComponents.Skill name={s} key={i}/>
    })

    var groupSize = this.props.group.id.size(function(s,i){
      return <MyComponents.Skill size={s} key={i}/>
    })

    var date = this.props.group.id.date(function(s,i){
      return <MyComponents.Skill date={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        <h2>Bar</h2>
        <ul>
        {name}
        </ul>
        
        <h2>Memebers</h2>
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