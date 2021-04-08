function money(){
    let num=parseInt(document.getElementById("namber").value);
    let res=document.getElementById("result");
    if(num<100){
        res=num;
    }
    else{
        let a=num/100;
        let b=num%100;
        a=Math.floor(a);
        res.innerText=`${a} Гривень ${b} копійок`
    }
}