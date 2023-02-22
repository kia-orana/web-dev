(function (window) {
  var byeSpeaker = {};
  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  // Additional requirement: 
  // Add another method called speakSimple into the SpeakGoodBye.js and 
  // SpeakHello.js that is externally exposed just like the speak method is. 
  // The speakSimple method should not use console.log, but instead should 
  // simply return the greeting concatenated to the passed in name argument. 
  byeSpeaker.speakSimple = function(name) {
    return speakWord + " " + name;
  }

  window.byeSpeaker = byeSpeaker;
})(window);