let display=document.getElementById("display");
function append(value){
    if (!isNaN(value)) {
        display.value+=value;
        op=display.value;      
    }
    else{        
            display.value=op+value;
    }

}

function clearDisplay(){
display.value="";
op=display.value; 
}

function removeLast(){
let display = document.getElementById("display");
display.value = display.value.slice(0,-1);
op=display.value;
}
function percent(){
    display.value=eval(display.value)/100;
    op=display.value;
}

function calculate(){
try{
      display.value=eval(display.value);
      op=display.value;
}
catch{
display.value="Error";
}
}