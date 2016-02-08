MyComponents.Task = React.createClass({

  render: function() {
    return (
      <li className="collection-item">Task: {this.props.task.title} Due Date: {this.props.task.deadline} Priority: {this.props.task.priority} Type: {this.props.task.type}</li>
    );
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {

    var tasks = [];
    
    for( var key in this.props.tasks){
      if (this.props.tasks.hasOwnProperty(key)) {
        var tempTask = this.props.tasks[key];
        if( tempTask.assigned == "ZachLamb"){
            var tmp = <MyComponents.Task task={tempTask} key={key}/>
            tasks.push(tmp)
        }
      }
    }

    return (
      <div className="card green darkne-1">
        <div className="row">
          <div className="col s6 offset-s3">
            <div className="card green darken-4">
              <div className="card-content white-text">
                <span className="card-title">here are tasks assigned to Zach</span>
                <ul className="center collection black-text">
                {tasks}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
