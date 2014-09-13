// from: http://stackoverflow.com/a/5303242/945521
if ( XMLHttpRequest.prototype.sendAsBinary === undefined ) {
    XMLHttpRequest.prototype.sendAsBinary = function(string) {
        var bytes = Array.prototype.map.call(string, function(c) {
            return c.charCodeAt(0) & 0xff;
        });
        this.send(new Uint8Array(bytes).buffer);
    };
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
      appId  : "421827047887661",
      status : true, 
      cookie : true, 
      xfbml  : true 
    });
};

function postPhotoToFacebook(data) {
  var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
  var decodedPng = Base64Binary.decode(encodedPng);
  
  FB.getLoginStatus(function(response) {
    if (response.status === "connected") {  
    postImageToFacebook(response.authResponse.accessToken, "pimpmycover", "image/png", decodedPng, "www.pimpmycover.com");
    } else if (response.status === "not_authorized") {
     FB.login(function(response) {
      postImageToFacebook(response.authResponse.accessToken, "pimpmycover", "image/png", decodedPng, "www.pimpmycover.com");
     }, {scope: "publish_stream"});
    } else {
     FB.login(function(response)  { 
      postImageToFacebook(response.authResponse.accessToken, "pimpmycover", "image/png", decodedPng, "www.pimpmycover.com");
     }, {scope: "publish_stream"});
    }
   });

};

function postImageToFacebook( authToken, filename, mimeType, imageData, message ) {
    var boundary = '----ThisIsTheBoundary1234567890';   
    var formData = '--' + boundary + '\r\n'
    formData += 'Content-Disposition: form-data; name="source"; filename="' + filename + '"\r\n';
    formData += 'Content-Type: ' + mimeType + '\r\n\r\n';
    for ( var i = 0; i < imageData.length; ++i ) {
        formData += String.fromCharCode( imageData[ i ] & 0xff );
    }
    formData += '\r\n';
    formData += '--' + boundary + '\r\n';
    formData += 'Content-Disposition: form-data; name="message"\r\n\r\n';
    formData += message + '\r\n'
    formData += '--' + boundary + '--\r\n';
    
    var xhr = new XMLHttpRequest();
    xhr.open( 'POST', 'https://graph.facebook.com/me/photos?access_token=' + authToken, true );
    xhr.onload = xhr.onerror = function() {
      var resp = JSON.parse(xhr.responseText);
      if (resp.id) {
        $("#hidden-link").attr('href',"http://www.facebook.com/profile.php?preview_cover=" + resp.id);
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("click",true,true,window,0,0,0,0,0,true,false,false,true,0,null);
        $("#hidden-link").get(0).dispatchEvent(e);
        setTimeout(function(){window.getSelection().empty()},250);
      }
    };
    xhr.setRequestHeader( "Content-Type", "multipart/form-data; boundary=" + boundary );
    xhr.sendAsBinary( formData );
};

