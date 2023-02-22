(function (window) {
  var helloSpeaker = {};
  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  // Additional requirement: 
  // Add another method called speakSimple into the SpeakGoodBye.js and 
  // SpeakHello.js that is externally exposed just like the speak method is. 
  // The speakSimple method should not use console.log, but instead should 
  // simply return the greeting concatenated to the passed in name argument. 
  helloSpeaker.speakSimple = function(name) {
    return speakWord + " " + name;
  }

  window.helloSpeaker = helloSpeaker;
})(window);