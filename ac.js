img = "";
status = "";
objects = [];
objectdetector = "";

function preload(){
    img = loadImage("AirAC.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log('ModelLoaded');
    status = true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results; 
}
    
function draw() {
    if (status != undefined) {
          image(img, 0, 0, 640, 420);
      for (var i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
  
        fill(255, 0, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
  }
