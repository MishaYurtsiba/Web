function f(){
    let res="";
    for(let i=21;i<50;i++){
        
        if(i%3==0&&i%5!=0){
            res+=`<li>${i},<li>`;
        }
    }
    document.getElementById("result").innerHTML=res;
}