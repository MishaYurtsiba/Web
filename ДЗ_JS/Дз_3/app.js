function Interval(){
    let res=document.getElementById("result");
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    let sum=0;
    while(n1<n2){
        if(n1%2==1){
            sum+=n1;           
        }
        else{
            res.innerText=`${sum}`;
        }
        n1++;
    }
}