noseX = 0;
noseY = 0;

function preload() {
    clown_image = loadImage('https://i.postimg.cc/MKDH61sf/clownimage.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, "modelLoaded");
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);

    //draw red circle on the nose
    fill(255, 0, 0); //fill red color
    stroke(255, 0, 0); //border color=red
    circle(noseX, noseY, 20);

    //draw clown images
    image(clown_image, noseX, noseY, 40, 40);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log("PoseNet Model is Loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;
        console.log("Nose x: " + noseX);
        console.log("Nose y: " + noseY);
    }
}