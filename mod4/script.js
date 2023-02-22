// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  // Additional requirement: 
  // In the main script.js, use the map function to create an array based on the 
  // names array. This array will contain the greetings based on the names with 
  // the same rules as implemented previously. The function passed into the map 
  // function should not be an inline function, i.e., separate it into its own named 
  // function and pass it into the map function as a value.
  function createArray(name){
    var greeting = "";
    if (name.charAt(0).toLowerCase() === 'j'){
      greeting = byeSpeaker.speakSimple(name);
    } else {
      greeting = helloSpeaker.speakSimple(name);
    }
    return greeting;
  }

  var greetingArray = names.map(createArray);

  for (var j = 0; j < greetingArray.length; j++){
    console.log(greetingArray[j]);
  }

  // Bonus/Optional requirement: 
  // In the main script.js, use the reduce function to create 2 separate arrays: 
  // one with all the ‘hello’ greetings and another with all the good bye greetings. 
  // Then, loop over each array (obviously separately) and print out the greetings to 
  // the console with console.log. You are required to use {hello: [], bye: []} as 
  // your initialValue. 
  var initialValue = {hello: [], bye: []};
  
  function reducer(accumulator, name){
    if (name.charAt(0).toLowerCase() === 'j'){
      accumulator.bye.push(byeSpeaker.speakSimple(name));
    } else {
      accumulator.hello.push(helloSpeaker.speakSimple(name));
    }
    return accumulator;
  }

  var greetings = names.reduce(reducer, initialValue);

  for (var helloGreetings in greetings.hello){
    console.log(greetings.hello[helloGreetings]);
  }

  for (var byeGreetings in greetings.bye){
    console.log(greetings.bye[byeGreetings]);
  }

})();
