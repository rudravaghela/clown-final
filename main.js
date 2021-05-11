nose_X = 0;
nose_Y = 0;

function preload(){
clown_nose = loadImage("https://i.postimg.cc/DZ5Cy9gw/clown-nose.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,nose_X,nose_Y,30,30);

} 

function take_snapshot(){
    save("rudra.png");
}

function modelLoaded(){
    console.log("modelLoaded!");
    
}

function gotPoses(results){
    if (results.length > 0)
{
    console.log(results);
    nose_X = results[0].pose.nose.x;
    nose_Y = results[0].pose.nose.y;

    console.log("nose x = " +nose_X);
    console.log("nose y = "+nose_Y);

    
}
}
