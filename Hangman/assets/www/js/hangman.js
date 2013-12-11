$(document).ready(function() {
    hangman();
  function hangman(){  
    var turn=0;
    var display = new Array();
    var pictures = new Array();
    var difficulty = new Array();
    pictures = ["img/turn 0.jpg", "img/turn 1.jpg", "img/turn 2.jpg", "img/turn 3.jpg", "img/turn 4.jpg", "img/turn 5.jpg", "img/whole.jpg"];
    var words = new Array("pie","cake","blast","algorithm","differentiate");
    difficulty = words;
    
    var random = Math.floor((Math.random()*words.length));
    var currentWord = difficulty[random];
    displayInitial(currentWord);
    
    
    
    $("h2").click(function(){
        var complGuess = document.getElementById('input').value;
        if (complGuess=="") {
            var x = document.getElementById("dropDown").selectedIndex;
            var letterChosen = document.getElementsByTagName("option")[x].value;
            displayLetterpicked(letterChosen,currentWord);
        }

        getAnswer(complGuess);
        displayPicture();
    });
    
    function getAnswer(complGuess){
        var guess = new Array();
        guess[0]=complGuess;
        
        if (guess[0]==currentWord) {
            var placeHolder = document.getElementById("display");
            placeHolder.innerHTML=currentWord;
            alert("you win!");
        }
        else if(guess[0]!=""){
            turn+=1;
            document.getElementById('input').value="";
        }
    }
    
    function displayInitial(currentWord) {
        
        var split = currentWord.split("");
        for (var c=0;c<split.length;c++) {
            if (split[c]!=" ") {
                display[c]="-";
            }
            else{
                display[c]=" ";
            }
        }
        
        var placeHolder = document.getElementById("display");
        placeHolder.innerHTML = display.join("");
    }
    
    function displayLetterpicked(letterChosen,currentWord){
        var split = currentWord.split("");
        for (var i=0;i<split.length;i++){
            if (letterChosen==split[i]) {
                var correct = true;
                display[i]=letterChosen;
            }
        }
        if (correct!=true) {
            turn+=1;
        }
        
        var placeHolder = document.getElementById("display");
        placeHolder.innerHTML=display.join("");
        if (placeHolder.innerHTML==currentWord) {
            alert("you win");
        }
        
    }
    
    function displayPicture(){
        $("#my_image").attr("src",pictures[turn]);  
    }
    
    $('#newGame').click(function(event){
        location.reload(true);
    });
  }  
});