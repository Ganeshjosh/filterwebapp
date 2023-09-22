nosex=""
nosey=""
mask=""

function preload(){
    mask=loadImage("optimus-removebg-preview.png");
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(400,300)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded(){
console.log("POSE NET INITIALIZED SUCESSFULLY");
}

function gotPoses(results){
if(results.length>0) {
    console.log(results);
    console.log("nose x ="+results[0].pose.nose.x );
    console.log("nose y ="+results[0].pose.nose.y );
    nosex =results[0].pose.nose.x -150
    nosey =results[0].pose.nose.y -120
}
}


function draw(){
    image(video,0,0,400,300)
image(mask,nosex,nosey,300,200)
}

function take_snapshot(){
    save('i am worthy.png');
}
