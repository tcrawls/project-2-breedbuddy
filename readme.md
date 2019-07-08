# BREED BUDDY

General Assembly SEI 22 - Project #2 - July 2019
  * Heroku: https://morning-gorge-20320.herokuapp.com/breeds
  * Github: https://github.com/tcrawls/project-2-breedbuddy
  * Trello board: https://trello.com/b/giXFs4SZ/project-2-sei22
  

## Overview

The objective of Project 1 was to demonstrate and apply our skills in HTML, CSS, and Javascript to create a fully-functiononal, web-based game that a user could successfully play. For my project, I built a basic game of Blackjack wherein the user (i.e. Player) attempts to beat the Dealer by either "hitting" or "standing" based on the cards dealt in each hand. An "overall score" tracker displays the user's progress against the dealer in total games won/lost.

![alt text](https://github.com/tcrawls/project-1-blackjack/blob/master/images/blackjack-screenshot.png "Blackjack Game Screenshot")

## How to play

1. Click the Deal button to begin
    * Note the "Dealer" and "Player" point totals for each hand as currently displayed
2. Click the Hit button to hit again, or click Stand to stand with your current cards
3. After each click, follow the prompt in the Messages field at the top
4. At the end of each hand, click the Deal button to deal another hand

## Wireframe

![alt text](https://github.com/tcrawls/project-1-blackjack/blob/master/images/blackjack-wireframe.jpg "Blackjack Wireframe Image")

## Technologies used

  * HTML5
  * CSS/Bootstrap 4
  * JavaScript
  * Node.js
  * Express.js
  * Handlebars
  * MongoDB.js
  * Mongoose

## External sources/citations

  * In order to "shuffle" the card deck after each hand, I used the below function which takes an array and returns a new array with the same content as the original array, but in randomized order.
  * Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

```javascript
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
      
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    // Store the shuffled deck in cardsInDeck array
    cardsInDeck = array
    return cardsInDeck
}
```

## Future developments/improvements

  * Make page and layout responsive to device/window size
  * Improve table, card and text styling and add card animations
  * Animate messages and prevent additional button clicks until new game has begun
  * Allow the user to place a bet using chips. Allocate a starting amount of chips and keep track of the user's chip count. If the user beats the dealer without busting, the user doubles their bet in chips. Otherwise the user loses their bet.
  * Allow the user to input name and choose from different decks of cards (e.g. different styles)
