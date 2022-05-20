function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#EDEDED');

    document.getElementById("square_side").innerHTML = "Width and Length of a Square will be = " + difference + "px";
    fill('#95CDE8');
    stroke('#95CDE8');
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    { console.log(results);}
    
}