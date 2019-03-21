let destination = ""
console.log("hi")

$("#journey").click(function () {
   console.log(1)
   // onclick="doThisFunction();thenDoTheOtherFunction();"
   fetch('https://api.foursquare.com/v2/venues/explore?QR2DHCKWFADGCEVTE12AHCNWSP4Q2UI330HPJ2VB14X05ZC0&client_secret=W0VM2ZNYLWDACZN3QIJDQLGVO2GDBRRFHZDLCMEWE13QI2L5&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
   .then(function(response) {
       // Code for handling API response
       console.log(response)
   })
   .catch(function(error) {
       console.log(error)
       // Code for handling errors
   });
   const destination = $("#name").val()


function getVenue() {
   console.log('hi');
   console.log(firstVenue)
           const venues = $("#listOfVenues").val()
           
}
})