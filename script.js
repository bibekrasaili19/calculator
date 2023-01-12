let string='';
let c=0;
const keys=document.querySelectorAll(".keys");
const topp=document.querySelector(".top");
const erase=document.querySelector(".cross");
keys.forEach(i=>{
    i.addEventListener("click",()=>{
        if(c<10){
            string=string+i.textContent;
            topp.innerText=string;
            c++;
        }else{
            alert("Cannot exceed more than 10 characters");
        }
    });
});
erase.addEventListener("click",()=>{
    if(c==0){
        alert("No text");
    }else{
        string=string.slice(0,c-1);
        topp.innerHTML=string;
        c--;
    }

});