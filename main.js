'use strict';

// STILL NEED TO DO: Fix Functions, take out yes/no options


//Global Variables
var correctGuesses = 0;



//greeting alert
alert('My name is Ariel and this is an assignment that allows you to learn a little bit more about me by asking some questions!');

//username question
var usernameFunction= function(){
  var userName;
  do{
    userName = prompt('First, let\'s start out by getting to know you a bit better. What is your name?');
    console.log('What is your name? ' + userName);
  } while (!userName);
  alert('Hi, ' + userName + ' that is such a cool name! Now that I know something about you, let\'s see how much you know about me! Please make sure to answer yes or no for the first 5 questions!');
  console.log('What is your name? ' + userName);
  return userName;
};



//food question
var vegetarianFunction = function() {
  do{
    var vegetarian = prompt('Do I like to eat meat?');

  } while(!vegetarian);
  vegetarian = vegetarian.toUpperCase();
  if(vegetarian === 'YES'|| vegetarian === 'Y') {
    alert('No way, I haven\'t had meat in years! Well, except one crazy weekend, but that\'s our little secret!');
    correctGuesses++;

  } else if (vegetarian=== 'NO'|| vegetarian === 'N') {
    alert('I knew we were friends!');
  } else {
    alert('Come on, give me a REAL answer!');
  }
  console.log('Does Ariel eat meat? ' + vegetarian);
  return vegetarianFunction;
};


//Music question
var skrillexFunction = function() {
  do{
    var skrillex = prompt('Have I ever personally hung out with Skrillex?');
  } while(!skrillex);
  skrillex = skrillex.toUpperCase();
  if(skrillex === 'YES' || skrillex === 'Y') {
    alert('That\'s right, what a crazy night!');
    correctGuesses++;
  } else if (skrillex === 'NO' || skrillex === 'N') {
    alert('Actually I have, he\'s one of the nicest guys I\'ve met!');
  } else {
    alert('Come on, give me a REAL answer!');
  }
  console.log('Did Ariel hang out with skrillex? ' + skrillex);
  return skrillex;
};



//Anime question
var animeFunction = function() {
  do{
    var anime = prompt('Do I like anime?');
  } while(!anime);
  anime = anime.toUpperCase();
  if(anime === 'YES' || anime === 'Y') {
    alert('You bet I do!');
    correctGuesses++;
  } else if (anime === 'NO' || anime === 'N') {
    alert('What!? Who doesn\'t like anime!?');
  } else {
    alert('Come on, I want you to give me a REAL answer!');
  }
  console.log('Does Ariel like anime? ' + anime);
  return anime;
};


//Will Smith question
var willFunction = function() {
  do{
    var willSmith = prompt('Did I carve pumpkins with Will Smith\'s stunt double?');
  } while(!willSmith);
  willSmith = willSmith.toUpperCase();
  if(willSmith=== 'YES' || willSmith=== 'Y') {
    alert('That\'s right, I carved pumpkins with him in his hotel room while they were filming Wild Wild West! ');
    correctGuesses++;
  } else if (willSmith === 'NO' || willSmith=== 'N') {
    alert('Actually I did get to carve pumpkins with him!');
  } else {
    alert('Come on, I want a REAL answer!');
  }
  console.log('Did Ariel carve pumpkins with Will Smith\'s stunt double?? ' + willSmith);
  return willSmith;
};


//Bear question
var bearFunction = function() {
  do{
    var bear = prompt('Okay, so we know now that I\'m a vegetarian, but maybe I wasn\'t always a vegetarian! Do you think I\'ve ever eaten a BEAR before!?');
  } while(!bear);
  bear = bear.toUpperCase();
  if(bear === 'YES' || bear === 'Y') {
    alert('I did eat a bear, but not the whole thing! It was NASTY. ');
    correctGuesses++;
  } else if (bear === 'NO' || bear === 'N') {
    alert('You bet I did, but not the whole thing! It was years ago, and it was NASTY!');
  } else {
    alert('Come on, give me a REAL answer!');
  }
  console.log('Did Ariel ever eat a bear? ' + bear);
  return bear;
};


//colleges I've attended question
var turns= 4;
var collegeFunction = function() {
  while (turns > 0) {
    var colleges= parseInt(prompt('Can you guess how many colleges I have attended?'));
    if (colleges < 5) {
      alert('That is too low!');
      turns--;
    } else if(colleges > 5) {
      alert('that is too high');
      turns--;
    } else if(colleges === 5) {
      alert('That is correct! I have attended 5 colleges!');
      correctGuesses++;
      break;
    }
  }
  console.log('Can you guess how many colleges I have attended' + colleges);
  return colleges;
};


// states I've lived in question
var statesLivedIn = ['Washington', 'Mississippi', 'Idaho', 'Oregon', 'New York'];
var statesFunction = function() {
  for (var i = 0; i < 6; i++) {
    var statesGuess = prompt('Can you guess a state I have lived in?');
    if (statesLivedIn.includes(statesGuess)) {
      alert('That is correct! The States I have lived in are Washington, Mississippi, Idaho, Oregon, and New York!');
      correctGuesses++;
      break;
    } else if (i < 6) {
      alert('Sorry, I have never lived there!');
    }
  }
  return statesGuess;
};
// function calls:
usernameFunction();
vegetarianFunction();
skrillexFunction();
animeFunction();
willFunction();
bearFunction();
collegeFunction();
statesFunction();

alert('Thanks for answering my questions! You correctly answered ' + correctGuesses + ' out of 7!');
