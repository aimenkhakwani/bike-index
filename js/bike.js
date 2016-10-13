function Bike() {

}
Bike.prototype.stolenBikes = function(color) {
  $.get("https://bikeindex.org:443/api/v2/bikes_search?page=1&colors=" + color).then(function(response){
    for (var bike of response.bikes) {
      // console.log(bike.stolen);
      var title = bike.title;
      var serial = bike.serial;
      var stolen = bike.stolen;
      var manufacturer = bike.manufacturer_name;
      var id = bike.id;
      var frame = bike.frame_model;
      if (bike.thumb === null) {
        var image = '<img class="img" src="/img/bike.png"/>';
      } else {
        var image = '<img class="img" src="'+bike.thumb+'"/>';
      }
      $('.output').append("<div class='row well'>" + "<div class='col-sm-6'>" + image + "</div>" + "<div class='col-sm-6'><h3>" + title + "</h3><br>" + "<p>Serial Number: " + serial + "</p><p>Stolen: " + stolen + "</p><p>Manufacturer Name: " + manufacturer + "</p><p>ID: " + id + "</p><p>Frame Model: " + frame + "</p></div></div>");
    }
  });
};

exports.bikeModule = Bike;
