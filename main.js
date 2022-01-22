video=""
status=""

function setup()
{
    canvas=createCanvas(480, 320);
    canvas.center();
}

function preload()
{
    video=createVideo('video.mp4');
    video.hide();
}

function draw()
{
    image(video, 0, 0, 480, 320);
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Objects Detected";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status=true;
    video.speed(1);
    video.loop();
    video.volume(0);
}