---
layout: layout.hbs
---

# Features

## Feature: Usage

``` gherkin
Feature: Usage
	As a user of Drink Together
	I want to be able to plan a social drinking night with my friends
		then they will know when and where I will be

	Scenario: user gets to social event area late
		Given a user shows up to event late
			then they can login into app and see where everyone is at

	Scenario: user wants to communicate with a group of people
		Given a user wants to collaborate and get feedback on the bars they have chosen
			then they can have a Drink Together group
	
	Scenario: user wants see what bars are good
		Given a user is not familiar with the bars
			then we can give them info such as Yelp
```
Feature: ChatChannel
```
Feature: Chat Channel
 Scenario: User is joing a chatroom
    Given User is trying to join in the chatroom
    When he press join button
    Then he will be abke to see the participants of the channel and the previous talking hisory
 Scenario: User is saying something
    Given User is typing something insde the channel
    When he press send or Enter
    Then what he said will be posted in the chatroom append to previous chat record and visible to everyone in the channel
 Scenario: User is talking specific to someone
    Given User is trying to talk someone spcificly 
    When he press @ button
    Then there will be a pop up of all the participants in the channel
    When he select the guy he want to @
    When he press the send button
    All the user in the channel should be about to see the message and the user he @ should be able to see the notification in his highest level pannel

```

## Feature: User Status

``` gherkin
Feature: User Status
 Scenario: Bader is in bar.
   Given Bader has logged in into the system
   And he is on the map 
   When he selects a bar 
   Then Bader's status should be changed to in bar
   
 Scenario: Bader is inactive.
   Given Bader has logged in into the system
   And he is on the map 
   When he exits a map 
   Then Bader's status should be changed to inactive
 
 Scenario: Bader is active.
   Given Bader has logged in into the system
   And he is on the map 
   When he browse bar shops
   Then Bader's status should be changed to active



```

## Feature: Map

``` gherkin
Feature: Map (Callan Fisher)
  Senario: Selecting Bar 
    When I click the Bar Map tab I want to see all the bars in the area
    Then I will be able to select the bar I want
    Then it should share it with my friend to see if they agree

  Senario: Mapping the Bars
    When I select one bar I will have the option to select another bar
    When I select two or more bars I will have the option to pick the route I want to take
    Then it should share with friends so they can change it if they want

  Senario: Date and Time
    Once I create my different mapping of bars I can select data and time
    Then I can share that in the chat to see if others agree
    Then the admin or person in charge can finallize the schedule. 
```


# Examples

## Feature: Usage

``` gherkin
Feature: Usage
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I go to the README file
    Then I should see "Usage" as the page title
```

## Feature: Serve Coffee

``` gherkin
Feature: Serve coffee
  Coffee should not be served until paid for
  Coffee should not be served until the button has been pressed
  If there is no coffee left then money should be refunded

  Scenario: Buy last coffee
    Given there are 1 coffees left in the machine
    And I have deposited 1$
    When I press the coffee button
    Then I should be served a coffee

  Scenario: No more coffees
    Given there is no coffee left in the machine
    And I have deposited $1
    When I press the coffee button
    Then I should be refunded $1
```
