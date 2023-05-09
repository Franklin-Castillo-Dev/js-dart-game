let canvasArea = document.querySelector("canvas");
let pincel = canvasArea.getContext("2d");

let radio = 10;
let xRandomPosition;
let yRandomPosition;
let x = 0;

//event
canvasArea.onclick = shootDart;

// reload diana position every 1 second
setInterval(reloadScreen,1000);

// Draw circles in the canvas
// Help to draw the diana
function drawCircle(x,y,radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}	

// Clean the old Diana
function cleanScreen(){
    pincel.clearRect(0,0,600,400);    
    pincel.strokeRect(0,0,600,400);
}

// Draw the Diana in the Canvas
function drawDiana(x,y){

    // big circle
    drawCircle(x,y,radio + 20,"red");

    // middle circle
    drawCircle(x,y,radio + 10,"white");

    //small circle
    drawCircle(x,y,radio,"red");
}


// random position of the "diana"
function randomPosition(maxNumber){
    return Math.floor(Math.random()*maxNumber);
}

// redraw diana in new random position
function reloadScreen(){

    cleanScreen();
    xRandomPosition = randomPosition(600);
    yRandomPosition = randomPosition(400);
    drawDiana(xRandomPosition,yRandomPosition);
    x++;
}

// tell us if the click shoot the center of the diana
function shootDart(event){

    let x = event.pageX - canvasArea.offsetLeft;
    let y = event.pageY - canvasArea.offsetTop;

    if ((x < xRandomPosition + radio) && 
        (x > xRandomPosition - radio) &&
        (y < yRandomPosition + radio) &&
        (y > yRandomPosition - radio) ) {
        alert("Tiro Certero");
    }
}

