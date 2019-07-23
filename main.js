//TODO write liscence here


//TODO use promises in loading data

//load training set
var trainPictures = loadTrainPictures();
//populate train_container
trainPictures.forEach(picture => {
    addTrainPicture(picture);
});

//load caught photos
var caughtPictures = loadCaughtPictures();
//populate caught_container
caughtPictures.forEach(picture => {
    addCaughtPicture(picture);
});

//load saved model
var model = loadModel();

var video = document.querySelector("#videoElement");
var canvas = document.createElement("canvas");
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
var ctx = canvas.getContext("2d");
//the following block was taken from https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }
//end of quote

setTimeout(update, 500);

function update() {
    //display webcam on canvas
    ctx.drawImage(video, 0, 0)
    //classify
    //if marked:
    //  save photo
    //  add to captured
}

function addTrainPicture(picture) {
    //draws onto DOM
    //picture: json of {img: enc-img, label: 0-1, id: str}
}

function saveTrainPicture(picture) {
    //adds to DB
    //do nothing because I will not use localstorage in production
}

function eraseTrainPicture(picture) {
    //removes from DOM
}

function deleteTrainPicture(picture) {
    //deletes from DB
    //do nothing because I will not use localstorage in production
}

function addCaughtPicture(picture) {
    //draws onto DOM
    //picture: json of {img: enc-img, identified-label: 0-1, id: str, timestamp: str}
}

function saveCaughtPicture(picture) {
    //adds to DB
    //do nothing because I will not use localstorage in production
}

function eraseCaughtPicture(picture) {
    //removes from DOM
}

function deleteCaughtPicture(picture) {
    //deletes from DB
    //do nothing because I will not use localstorage in production
}

function loadTrainPictures() {
    //will not use localstorage in production
    return []
}

function loadCaughtPictures() {
    //will not use localstorage in production
    return []
}

function loadModel() {
    //returns model (random init or from localStorage)
    //hardcode model here
}

function saveModel() {
    //do nothing for now since I will not be using localstorage in production
}

function train() {
    //train model
    model.fit
    //save model
    saveModel()
}

function canvasToTensor(canvas) {
    return tf.browser
        .fromPixels(canvas)
        .toFloat()
        .div(255.0);
}