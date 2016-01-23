
        // create a firebase reference to the root
        var ref = new Firebase('https://hello-ucdd2016.firebaseio.com/')
        var refGroup = new Firebase('https://ucdd2bookuno.firebaseio.com/')
        // read data from the location bio/favorite_foods, only once
        ref.child('bio/favorite_foods').once('value', function(snapshot)
        {
          var foods = snapshot.val()
          foods.forEach(function(food){
            $('#foods').append('<li class="collection-item">' + food + '</li>')
          })
        })

        // read data from the location bio/programming_languages/most_experience, only once
        ref.child('bio/programming_languages/most_experience').once('value', function(snapshot)
        {
          var most_experience = snapshot.val()
          most_experience.forEach(function(most_experience){
            $('#most_experience').append('<li class="collection-item">' + most_experience + '</li>')
          })
        })
        // read data from the location bio/programming_languages/most_experience, only once
        ref.child('bio/programming_languages/some_experience').once('value', function(snapshot)
        {
          var some_experience = snapshot.val()
          some_experience.forEach(function(some_experience){
            $('#some_experience').append('<li class="collection-item">' + some_experience + '</li>')
          })
        })

        // read data from the location bio/experiences, only once
        ref.child('bio/experiences').once('value', function(snapshot)
        {
          var experiences = snapshot.val()
          experiences.forEach(function(experience){
            $('#experiences').append('<li class="collection-item">' + experience + '</li>')
          })
        })

        // read data from the location bio/education, only once
        ref.child('bio/educations').once('value', function(snapshot)
        {
          var educations = snapshot.val()
          educations.forEach(function(education){
            $('#education').append('<li class="collection-item">' + education + '</li>')
          })
        })
        // tasks section

        refGroup.child('todos/').once('value',function(snapshot)
        {
          var tasks = snapshot.val()
          tasks.forEach(function(task){
            if(task.assign == "zachlamb" || "ZachLamb"){ 
              $('task').append('<div class="col s12 m6">'+
                          '<div class="card blue-grey darken-1">'
                          +'<div class="card-content black-text">'+
                          '<span class="card-title collection-item '+task.priority + '">'+ task.title + '</span>'+'<p>Deadline: '+task.deadline+'        Priority: '+ task.priority +'  Type: '+ task.type +'</p>' + '</div>'
                          +'<div class="card-action">'+'<a href="#">Complete</a>\'</div>'+
                          
                          '</div>'+
                          '</div>')
            }
          })
        })