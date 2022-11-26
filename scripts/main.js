var numOne= document.getElementById("num-one");
var numTwo= document.getElementById("num-two");
var addSum= document.getElementById("add-sum");

numOne.addEventListener("input",add);
numTwo.addEventListener("input",add);

function add(){
    var one=parseFloat(numOne.value) || 0;
    var two=parseFloat(numTwo.value) || 0;
    var sum=one+two;
    addSum.innerHTML="your sum is:"+sum;
}

var button=document.getElementById('button');
var main=document.getElementById("main");
button.addEventListener("click",show);

function show(){
    if(main.className==="hide"){
        main.className="";
    }
    else{
        main.className="hide";
    }
}

var apples=document.getElementById("button1");
var oranges=document.getElementById("button2");
var bananas=document.getElementById("button3");
var watermelons=document.getElementById("button4");
apples.addEventListener("click",done);
oranges.addEventListener("click",done);
bananas.addEventListener("click",done);
watermelons.addEventListener("click",done);

function done(){
    var fruitId=this.attributes["data-fruit"].value;
    var fruit=document.getElementById(fruitId);
    if(fruit.className==="done"){
        fruit.className="";
    }
    else{
        fruit.className="done";
    }
}

var checklist=document.getElementById("checklist");
var items=checklist.querySelectorAll("li");
var input=checklist.querySelectorAll("input");
for(var i=0;i<items.length;i++){
    items[i].addEventListener("click",edititem);
    input[i].addEventListener("blur",update);
    input[i].addEventListener("keypress",keypress);
}

function edititem(){
    this.className="edit";
    var input=this.querySelector("input");
    input.focus();
    input.setSelectionRange(0,input.value.length);
}

function update(){
    this.previousElementSibling.innerHTML=this.value;
    this.parentNode.className="";
    console.log(this.value);
}
function keypress(event){
    if(event.which===13){
        update.call(this);
    }
}