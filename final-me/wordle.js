
var guessedCorrectly = false;

var green = "#21e864";
var yellow = "#e8ce21";
var gray = "#bdbdbd";
var transparent = "transparent";

console.log(words)


var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var place = 0-1;
const universalWordLength = 5;

var hours = 0;
var minutes = 0
var seconds = 0;

let boxes;
    for (let n = 0; n < 30; n++) {
            boxes = document.createElement("div");
            boxes.id = "box"+n;
            boxes.classList.add("boxes");
            $(".s1")[0].appendChild(boxes);
    }

boxes = $(".boxes");
console.log(boxes[0].style.background === '')
setInterval(() => {
    if (guessedCorrectly == false) {
          seconds++;
          if (seconds < 10) {
              seconds = '0'+seconds;
          }
        //console.log(hours+":"+minutes+":"+seconds)
    }
}, 1000);//1000ms = 1 sec;

setInterval(() => {
    if (seconds>58) {
        seconds = 0;
          minutes++;
          if (minutes < 10) {
            minutes = '0'+minutes;
        }
    }
}, (60*1000));

setInterval(() => {
    if (minutes>58) {
          hours++;
          minutes = 0;
          if (hours < 10) {
            hours = '0'+hours;
        }
    }   
}, (60*60*1000));

var enters = 0;

var getLength = function(i){
    return i.length;
}
var upper = function(i){
    return i.toUpperCase();
}
words = words.map(upper);

var lengths = words.map(getLength) 
console.log(lengths)
console.log(words.length)


var random = Math.floor(Math.random()*words.length) 
var word = words[random].toUpperCase();
console.log(word)



var fill = function(i,n){    
        if (i[n].textContent.length == 0) {
            i[n].textContent = alphabet[event.keyCode-65];
        }
}

var remove = function(i,n){
    if (i[n].textContent.length == 1) {
        i[n].textContent = '';
    }
}


document.addEventListener('keydown',function(event){

        if (event.keyCode>=65 && event.keyCode<=65+25) { //a to z
            if (place >= -1 && place <=28) {
                place++;
                fill(boxes,place);
                if (place>29) {
                    place=29;
                }
            }
            
        }else if(event.keyCode==8){//backspace
            if (place >= -1 && place <=30-1) {
                remove(boxes,place);
                place--;

            }
        }
        console.log(place)
});




var roundtoFives = function(i){
    if (i == 0){
        return i + (5-1);
    }else{
        return (Math.ceil((i+0.0001)/5) * 5) - 1;
    }
}

var check = function(b) {
    if (boxes[roundtoFives(b)].textContent.length == 1) {
        boxes[b].style.boxShadow = "none";
        boxes[b].style.color = "#fff";
        if (word.includes(boxes[b].textContent) && word[b%5] === boxes[b].textContent){
            boxes[b].style.background = green;

        }else if (word.includes(boxes[b].textContent) && word[b%5] !== boxes[b].textContent) {
            boxes[b].style.background = yellow;

        }else{
            boxes[b].style.background = gray;
    
        }
    }
}
var guess;

var checkAll = function(i) {
    guess = boxes[i-4].textContent+
    boxes[i-3].textContent+
    boxes[i-2].textContent+
    boxes[i-1].textContent+
    boxes[i-0].textContent;

    if (boxes[i].textContent.length == 1) {
        if (words.includes(guess)) {      
            check(i-4);check(i-3);check(i-2);check(i-1);check(i-0);  

            if (word === (guess)) {
                console.log("YOU GOT IT! The word was",word+".")
                guessedCorrectly = true;           
            }
        $('.not-in-list')[0].style.display = "none";
        $('.s1')[0].style.animationName = "none";
        }else{
            $('.not-in-list')[0].style.display = "flex";
            $('.not-in-list')[0].textContent = guess+" not in list";
            $('.s1')[0].style.animationName = "shake";
        }    
    }
}


document.addEventListener('keydown',function(event){
    character = boxes[0].textContent;
    console.log(word,"includes",character,word.includes(character))
    if (event.keyCode == 13) {//enter
        checkAll(4);checkAll(9);checkAll(14);checkAll(19);checkAll(24);checkAll(29);
          if (guessedCorrectly == false && boxes[29].textContent.length == 1) {
            $('.the-word-was')[0].textContent = ("The word was");
            $('.word')[0].textContent = word;

            $(".time")[0].textContent = hours+":"+minutes+":"+seconds;
            $(".ending")[0].style.display = "flex";
            $(".ending-box")[0].style.animationName = "come-in";
            $(".play-again")[0].style.animationName = "come-in";
    
        }
    }
    if (guessedCorrectly == true) {
        $('.the-word-was')[0].textContent = ("The word was");
        $('.word')[0].textContent = word;
        
        $(".time")[0].textContent = hours+":"+minutes+":"+seconds;
        $(".ending")[0].style.display = "flex";
        $(".ending-box")[0].style.animationName = "come-in";
        $(".play-again")[0].style.animationName = "come-in";
    }
    
});           

$(".play-again")[0].onclick = function() {
    location.reload();
}


