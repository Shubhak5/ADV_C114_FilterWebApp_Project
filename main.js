function preload() {
    //no items to load
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotResults);
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function take_snapshot() {
    save('filterImage.png');
}

function modelLoded() {
    console.log("PoseNet model is loaded");
}

function gotResults(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Lip X : " + results[0].pose.lip.x);
        console.log("Lip Y : " + results[0].pose.lip.y);
    }
}