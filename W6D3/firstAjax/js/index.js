console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success: function(r) {
    console.log(r);
  },
  error() {
    console.log('an error has occured');
  },
});


console.log("another js message");
// Add another console log here, outside your AJAX request



// Write an AJAX request underneath the top console.log. Some guidelines:
//
// It should be a GET request.
// It should get the New York weather from this url: http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b
// If the request fails, sign up for your own API key here and stick that key in place of bcb83c4b54aee8418983c2aff3073b3b.
// It should take a success callback
// In the success callback, console.log out what the weather is.
// Write another console.log at the bottom of the file (outside of the AJAX request). Your file should have this rough structure:
