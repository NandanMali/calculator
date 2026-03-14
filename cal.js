var input,o,val=0,ans=0,val1=0,ans1=1,input1="i",co='A',e=0;
function cal(n) {
    input=n;
    o=document.getElementById("output");
    if (!isNaN(input)) {
        val=val*10+input;   
    o.value=val;
    }
    else{
        // val1=val+input;   
        // o.value=val1;
        switch (input1) {
            case '%':
                ans1=ans1*(val/100);
                 o.value=ans1;
                 e=1;
                break;
            case '/':
                ans1 =  ans1/val;
                o.value=ans1;
                ans=ans1;
                e=1;
                break;
            case '*':
                ans1 = val * ans1 ;
                o.value=ans1;
                 ans=ans1;
                e=1;
                break;
            case '-':
                ans = ans - val;
                o.value=ans;
                 ans1=ans;
                 e=2;
                break;  
            case '+':
                ans = val + ans;
                o.value=ans;
                 ans1 =ans;
                 e=2;
                break;
            case '=':
                if (e==2) {
                    o.value=ans; 
                }
               else{
                 o.value=ans1;
               }
        
            case 'i':
                ans=val+ans;
                ans1=val*1;
                break;
            default:
                break;
        }
    input1=input;
    val=0;
    }
    
}
function change(c){
     document.getElementById(c).style.backgroundColor="#337AB7";
}
