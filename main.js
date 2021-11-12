var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new  SpeechRecognition(); 

function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content ==  "take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    var speakData = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(Camera);

    setTimeout(function(){
      snapshot();
      save();
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
Camera = document.getElementById("camera");

function snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="photo" src="'+data_uri+'">';
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("photo").src;
    link.href = image;
    link.click();
}