let display=document.getElementById("display");
c=0;
function append(value){
    if (!isNaN(value)) {
       if (c==1) {
         display.value+=value;
        op=value*(op/100);
        c=2;
        // display.value=op;
       }
       else{
        display.value+=value;
        op=display.value;
       }
    }
    else{
        if (value=='%') {
            c=1;
            display.value=op+value;
        }
        else{
            display.value=op+value;
        }
       
    }

}

function clearDisplay(){
display.value="0";
}

function removeLast(){
let display = document.getElementById("display");
display.value = display.value.slice(0,-1);
op=display.value;
}

function calculate(){
try{
    if (c==2) {
      display.value=eval(op); 
      op=display.value; 
    }
    else{
      display.value=eval(display.value);
      op=display.value;
    }
}
catch{
display.value="Error";
}
}