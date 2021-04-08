function cycle(){
let row=document.getElementById("ol");
let nam=parseInt(document.getElementById("number").value);
let nam2= Math.pow(nam,2);
    for(let i=1;i<nam+1;i++){
        let sum =``;
        for(let j=1;j<nam2+1;j++){
             sum +=`,${j}`;
        }       
        row.innerHTML += `<li>${sum}<li>`;
    }
}