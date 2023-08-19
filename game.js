var colorOfButton = ["red","blue","green","yellow"];
var javaSequence = [];
var userSequence = [];
var started = false;
var level = 0;


$(document).keydown(function(){
    if(!started){
    $("#level-title").text("Level "+level);
    sequence();
    started = true;
}
})

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userSequence.push(userChosenColor);
    clickStroke(userChosenColor);
    clickAnimation(userChosenColor);
    checkSequence(userSequence.length-1);
})

function checkSequence(levelValue){
    if(javaSequence[levelValue] === userSequence[levelValue]){
        console.log("Success");
        if(userSequence.length === javaSequence.length){
            
        setTimeout(function(){
            sequence();
        }, 1000);
        }
    }else{
        console.log("wrong");
        clickStroke("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 300);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startAgain();
    }
}

function sequence(){
    userSequence = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = colorOfButton[randomNumber];
    javaSequence.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    clickStroke(randomChosenColor);
}

function clickStroke(clicked){
    var audio = new Audio("sounds/"+clicked+".mp3");
    audio.play();
}

function clickAnimation(clicked){
    $("#"+clicked).addClass("pressed");
    setTimeout(function(){
        $("#"+clicked).removeClass("pressed");
    }, 100);
}

function startAgain(){

    javaSequence = [];
    started = false;
    level = 0;
}