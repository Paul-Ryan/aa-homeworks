// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
//
// For example,
//
// > madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

function madLib(verb, adjective, noun) {
  return 'We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}';
}

madLib('make', 'best', 'guac');
