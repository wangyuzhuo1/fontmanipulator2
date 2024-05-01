
function setup(){
    video = createCapture(VIDEO)
    video = video.size(400, 400)

    canvas = createCanvas(500, 500)
    canvas.position(560, 150)

    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}

function draw(){
    background("#c0c0c0")
}

function modelloaded(){
    console.log("Model is loaded :)")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results)
    }
}