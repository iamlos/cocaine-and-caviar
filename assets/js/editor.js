function setupInput(name) {
  $("input#" + name).keyup( function() {
    $("#" + name + "_line").text(this.value);
  });
}

function renderImage(width, height) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  var img = new Image();
  $("#hidden").html("");
  $("#hidden").append($("#cocaine_caviar").clone());

  var svg = new Blob([$("#hidden").html()], {type: "image/svg+xml;charset=utf-8"});
  var DOMURL = self.URL || self.webkitURL || self;
  var url = DOMURL.createObjectURL(svg);
  console.log("Creating image " + url);
  img.onload = function() {
    console.log("Drawing image");

    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);
    postPhotoToFacebook(canvas.toDataURL("image/png"));
  };

  img.onerror= function(e) {
    console.log("Error " + e);
  }
  img.src = url;

}

$(document).ready(function() {
  
  setupInput("first");
  setupInput("second");
  setupInput("third");
  setupInput("fourth");

  $("p.full > button").click(function() {
    renderImage(815, 315);
  });

});