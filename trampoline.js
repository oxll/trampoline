let n = 50; // number of segments on one side
let b = 10; // segment length
let a; // space between segments

if (n !== 1) {
a = (74.75-(b*0.25))/((n*0.25)-0.25);
} else if (n === 1) {
a = (74.75-(b*0.25))/((n*0.5)-0.25);
}

for (let i = 0; i < n; i++) {
    
    strokeWeight(2);
    stroke(255, 125, 0);
    
    line(50, a*i+50, 50, a*i+b+50); // side i
    line(a*i+50, 349.5, a*i+b+50, 349.5); // side ii
    line(350, 399-(a*i+50), 350, 399-(a*i+50)-b); // side iii
    line(399-(a*i+50), 50, (399-(a*i+50))-b, 50); // side iv
    
    line(50, a*i+50+(b/2), a*i+50+(b/2), 349.5); // web i
    line(a*i+50+(b/2), 349.5, 350, 399-(a*i+50)-(b/2)); // web ii
    line(350, 399-(a*i+50)-(b/2), 399-(a*i+50)-(b/2), 50); // web iii
    line(399-(a*i+50)-(b/2), 50, 50, a*i+50+(b/2)); // web iv

}

fill(225, 225, 225);

textSize(200);
textFont(createFont("monoscript"));

if (n === 0) {
    text("D:", 25, 200);
    textSize(20);
    text("seriously? zero segments?\nwhat did you think was going to happen?\n\nnow i'm sad and it's all your fault :(", 25, 250);
}

textSize(200);

if (n < 0) {
    text("D:<", 25, 175);
    textSize(20);
    text("you really wanted a negative number\nof segments, huh??\nwell, i won't let you have a\nnegative square. >:(\n\nnot even for your birthday :(", 25, 250);
}

textSize(200);

if (abs(n % 1) !== 0) {
    background(255, 255, 255);
    text("\\ö/", 25, 175);
    textSize(20);
    text("HOW THE HECK AM I SUPPOSED TO\nSPLIT A SQUARE UP INTO ", 25, 225);
    textSize(50);
    text(n.toString(), 25, 302.5);
    textSize(20);
    textLeading(28);
    text("\nSEGMENTS, HUH?", 25, 302.5);
    text("\n\n\nwhy so mean :'(", 25, 300);
}
