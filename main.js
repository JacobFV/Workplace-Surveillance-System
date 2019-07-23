var video = document.querySelector("#videoElement");

var canvas = document.createElement("canvas");
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
var ctx = canvas.getContext("2d");

//the following block was taken and modified from https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (error) {
        console.log("Something went wrong!");
      });
  }
//end of quote