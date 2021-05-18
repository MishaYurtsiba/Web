function filerLesons(){
    let sum1=0;
    let sum2=0;
    let sum3=0;
    let sum4=0;
    let sum5=0;
    let b =document.getElementById("output");
    let math=[10,8,10,11,10];
    let history=[5,7,3,9,4];
    let it=[10,4,7,5,3];
    let le=[12,10,11,9,10];
    let li=[9,9,8,7,10];
    for(let i=0;i<5;i++){
        sum1+=math[i];
    }
    if(sum1/5>8){
        console.log("Математика");
    }
    for(let i=0;i<5;i++){
        sum2+=history[i];
    }
    if(sum2/5>8){
        console.log("Історія");
    }
    for(let i=0;i<5;i++){
        sum3+=it[i];
    }
    if(sum3/5>8){
        console.log("Інформатика");
    }
    for(let i=0;i<5;i++){
        sum4+=le[i];
    }
    if(sum4/5>8){
        console.log("Українська Мова");
    }
    for(let i=0;i<5;i++){
        sum5+=li[i];
    }
    if(sum5/5>8){
        console.log("Українська Література");
    }
    
    

}