function c(){
    let n= parseInt(document.getElementById("centimeter").value);
    let res="";
    let a=n*0.3937;
    res=`${a}`;
    document.getElementById("res1").innerText=res;
}
function k(){
    let n= parseInt(document.getElementById("kilogram").value);
    let res="";
    let a=n*2.2046;
    res=`${a}`;
    document.getElementById("res2").innerText=res;
}
function s(){
    let n= parseInt(document.getElementById("kilometer").value);
    let res="";
    let a=n*0.6213;
    res=`${a}`;
    document.getElementById("res3").innerText=res;
}