var Bike = require('./../js/bike.js').bikeModule;
$(document).ready(function() {
  var newBike = new Bike();
  $('#form').submit(function(event) {
    event.preventDefault();
    var color = $('#color').val();
    newBike.stolenBikes(color);
  });
});
