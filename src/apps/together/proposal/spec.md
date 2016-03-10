---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

*Groups:
          *ID
          *name
          *size
          *date
          *listOfChoices: [ChoiceName:[ userIDs,timeFrame ]]  
             *listOfUsers: [UserName:[ ChoiceName ,timeFrame ]]  
*Users:

  *ID
  *Group
  *isGroupOwner
           *Selected choices
*Choices (Yelp Dataset):
            *choice name 
            *choice location [longitude, latitude]
            *isOpen
            *Categories  (Irish, Pub, etc.)
*Messages:
            *ID
            *content 
            *from 
            *to
            *time



# Actions

The major actions of our app are:
* Join a group
* Choose a bar
* Filter a bar 
* Rate a bar

## Action: Join a group

Case: Join a drink together group

// given
drinktogether.groups.listOfUsers is
{
  '-userName': 'Zach',
  '-userName': 'Callan',
}

// when
join_a_group(userName = 'Bader')

// then
drinktogether.groups.listOfUsers should be
{
  '-userName': 'Zach',
  '-userName': 'Callan',
  '-userName': 'Bader',
}

Case: Unjoin a drink together group

// given
drinktogether.groups.listOfUsers is
{
  '-userName': 'Zach',
  '-userName': 'Callan',
  '-userName': 'Bader',
}

// when
unjoin_a_group(userName = 'Bader')

// then
drinktogether.groups.listOfUsers should be
{
  '-userName': 'Zach',
  '-userName': 'Callan',
}


## Action: Choose a bar

Case: Bader chooses a dark horse bar

// given
drinktogether.users.selectedChoices is
{
  '-barName': 'Sip',
 
}

// when
choose_a_bar(userName = 'Dark Horse')

// then
drinktogether.users.selectedChoices should be
{
  '-barName': 'Sip',
  '-barName': Dark Horse,
  '-userName': 'Bader',
}

## Action: Filter a bar

// given
Yelp.businesses is
{
 '-business': 'Dark Horse'
 '-business': 'Mountain Sun Pub & Brewery'
}

// when
choose_a_bar(categories = 'pubs')

// then
Yelp.businesses should be
{
'-business': 'Mountain Sun Pub & Brewery'

}






  
Case:Steve is posting a message

// given
drinktogether.Messages is
{
 '-':
  '-ID': '-xy05z',
    '-content': 'We are arriving at the Pearl Street',
'-from': 'Zach',
'-to': 'Thursday Bar Crawl Team',
'-time': 'MST 19:50:33 03/02/2016',

 '-':
  '-ID': '-xy08z',
    '-content': 'This Pub is great!',
'-from': 'Callan',
'-to': 'San Patrick’s Parade',
'-time': 'MST 22:55:33 03/18/2016',

}
// when  Steve
post_a_message(content = 'Wait me at Walnut for 10 minutes')

// then
drinktogether.Messages should be
{
'-':
  '-ID': '-xy05z',
    '-content': 'We are arriving at the Pearl Street',
'-from': 'Zach',
'-to': 'Thursday Bar Crawl Team',
'-tme': 'MST 19:50:33 03/02/2016',

'-':
  '-ID': '-xy06z',
    '-content': 'Wait me at Walnut for 10 minutes',
'-from': 'Steve',
'-to': 'Thursday Bar Crawl Team',
'-time': 'MST 19:55:25 03/02/2016',

 '-':
  '-ID': '-xy08z',
    '-content': 'This Pub is great!',
'-from': 'Callan',
'-to': 'San Patrick’s Parade',
'-time': 'MST 22:55:33 03/18/2016',


}

Case:a bar crawl is finished, therefore the group is delected
// given
drinktogether.Messages is
{
'-':
  '-ID': '-xy05z',
    '-content': 'We are arriving at the Pearl Street',
'-from': 'Zach',
'-to': 'Thursday Bar Crawl Team',
'-tme': 'MST 19:50:33 03/02/2016',

'-':
  '-ID': '-xy06z',
    '-content': 'Wait me at Walnut for 10 minutes',
'-from': 'Steve',
'-to': 'Thursday Bar Crawl Team',
'-time': 'MST 19:55:25 03/02/2016',

 '-':
  '-ID': '-xy08z',
    '-content': 'This Pub is great!',
'-from': 'Callan',
'-to': 'San Patrick’s Parade',
'-time': 'MST 22:55:33 03/18/2016',


}


// when  Steve
delete_the_group(name = 'Thursday Bar Crawl Team')


// then
drinktogether.Messages should be
{
 '-':
  '-ID': '-xy08z',
    '-content': 'This Pub is great!',
'-from': 'Callan',
'-to': 'San Patrick’s Parade',
'-time': 'MST 22:55:33 03/18/2016',
}


