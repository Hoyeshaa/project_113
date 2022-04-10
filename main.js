function preload(){

}

function setup(){
  canva =   createCanvas(680 , 460);
  canva.position(150 , 250);
  canva.background(0 , 0 ,0);
  video = createCapture(VIDEO);
  video.hide();
 
}

function draw(){
    image(video , 100 , 100 ,480 , 260)
    fill(221,160,221)
    rect(30, 20, 55, 55, 20);
    rect(600, 380, 55, 55, 20.);
    rect(600, 20, 55, 55, 20);
    rect(30, 380, 55, 55, 20)
}


function take_snapshot(){
    save("filterImage.png");
}