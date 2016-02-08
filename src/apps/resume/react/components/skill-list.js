MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <li>{this.props.skill}</li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElementsMost = this.props.skills.most_experience.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    var skillElementsSome = this.props.skills.some_experience.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        <h2>Most Experience</h2>
        <ul>
        {skillElementsMost}
        </ul>
        
        <h2>Some Experience</h2>
        <ul>
        {skillElementsSome}
        </ul>
        </div>
      </div>
    );
  }
});
