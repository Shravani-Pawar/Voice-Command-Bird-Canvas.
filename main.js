apple="";
speak_data="";
to_number="";
screen_width="0";
screen_height="0";
x = 0;
y = 0;
arrayapple="";
draw_apple = "";
 
  
function preload(){
 
    apple=loadImage("yellow2.png");
    
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function start()
{
  document.getElementById("status").innerHTML = "System is listening.Please tell the number of birds you want to be drawn";  
  recognition.start();
} 
 
recognition.onresult = function(event) 
{
    
 content = event.results[0][0].transcript;
to_number=Number(content);
 console.log(event); 
 if(Number.isInteger(to_number))
 {  document.getElementById("status").innerHTML = "Started drawing bird";  
  
     draw_apple="set";
 }

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas=createCanvas(screen_width-150,screen_height-150);
 
}

function draw() {
  if(draw_apple == "set")
  {
       for (let i=1;i<=to_number;i++)
    {

     x=Math.floor(Math.random()*1050);
     y=Math.floor(Math.random()*400);
     image(apple,x,y)

    }
    document.getElementById("status").innerHTML = to_number + " birds drawn";
    draw_apple = "";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data=to_number+'Birds drawn';
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

