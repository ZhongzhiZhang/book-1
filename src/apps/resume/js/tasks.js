 // tasks section
        var refGroup = new Firebase('https://ucdd2bookuno.firebaseio.com/')
        refGroup.child('todos/').on('value',function(snapshot)
        {
          var tasks = snapshot.val()

          var filteredTasks = _.filter(tasks,{assigned: 'ZachLamb'})
          // console.log(tasks)
          console.log(filteredTasks)
          for (var key in filteredTasks){
            task = filteredTasks[key]
            console.log(task)
            $('#task').append('<div class="col s12 m6">'+
                        '<div class="card blue-grey darken-1">'
                        +'<div class="card-content black-text">'+
                        '<span class="card-title collection-item '+task.assigned + '">'+ task.title + '</span>'+'<p>Deadline: '+task.deadline+
                        '        Priority: '+ task.priority +'  Type: '+ task.type +'</p>' + '</div>'
                        +'<div class="card-action">'+'<a href="#">Complete</a>\'</div>'+
                        '</div>'+
                        '</div>')
          }
        })