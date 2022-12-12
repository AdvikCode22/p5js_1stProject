function setup(){
    myCanvas = createCanvas(500,400)
    myCanvas.position(30,160)

    camera = createCapture(VIDEO)
    camera.hide()
}

function draw(){
    circle(30,30,50)
    circle(470,30,50)
    circle(30,370,50)
    circle(470,370,50)
    fill("#FF7F7F")
    rect(15,57,30,286,10)
    rect(57,15,386,30,10)
    rect(455,57,30,286,10)
    rect(57,355,386,30,10)
    fill("lightgreen")
    image(camera,55,50,390,300)
}

function snapshot(){
    save("picture.png")
}