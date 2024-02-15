const btn = document.querySelectorAll(".add");
const sp = document.querySelectorAll("span");
let count = [0,0,0,0];
for(let i=0; i<btn.length; i++){
    
    btn[i].onclick = ()=>{
    
        count[i]++;
        sp[i].innerHTML = count[i];
        
    };
}