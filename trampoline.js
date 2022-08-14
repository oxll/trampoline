import Paddle from "/src/paddle.js";

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  }
  
function draw() {

    background(255);

    let n = 50; // number of segments on each side
    let b = 5; // segment length
    let a; // space between segments that automatically changes to fit square
    
      if (n !== 1) {
      a = (74.75 - (b * 0.25)) / ((n * 0.25) - 0.25);
    } else if (n === 1) {
      a = (74.75 - (b * 0.25)) / ((n * 0.5) - 0.25);
  }
    
    let tWidth = a * (n - 1) + b;
    let tHeight = tWidth;
  
    for (var i = 0; i < n; i++) {
        
        stroke(255, 0, 0);
        strokeWeight(4);
        
        translate(window.innerWidth/2 - tWidth/2, window.innerHeight/2 - tHeight/2);
        
        strokeWeight(2);
        stroke(255, 125, 0);
        
        line(0, a * i, 0, a * i + b); // side i
        line(a * i, 299.5, a * i + b, 299.5); // side ii
        line(300, 349 - (a * i + 50), 300, 349 - (a * i + 50) - b); // side iii
        line(349 - (a * i + 50), 0, 349 - (a * i + 50) - b, 0); // side iv
        
        line(0, a * i + (b / 2), a * i + (b / 2), 299.5); // web i
        line(a * i + (b / 2), 299.5, 300, 349 - (a * i + 50) - (b / 2)); // web ii
        line(300, 349 - (a * i + 50) - (b / 2), 349 - (a * i + 50) - (b / 2), 0); // web iii
        line(349 - (a * i + 50) - (b / 2), 0, 0, a * i + (b / 2)); // web iv

        resetMatrix();
    
    }
  }