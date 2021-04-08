function f(){
    let n1=parseInt(document.getElementById("number1").value);
    let n2=parseInt(document.getElementById("number2").value);
    let res="";
    if(n1<n2){
        
        for(i=0;n1<n2;i++){
            n1+=i;
            n2-=i;
            res+=`<li>${n1}---${n2}<li>`
            
        }
        document.getElementById("result").innerHTML=res;
    }  
}