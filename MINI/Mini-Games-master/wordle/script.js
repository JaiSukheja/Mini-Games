const space=document.getElementById("space")
function load(){
    location.reload();
}
let x=Math.random()*arr.length
let s=arr[Math.round(x)]
console.log(s)
let c=""
let r=1;
let i=1;
let key=document.addEventListener("keydown",(event)=>{
    let div=document.getElementById("div-"+r+i);
    // console.log(event.key)
    if(event.key==" "){
        location.reload();
    }
    if(event.key<'a' || event.key>'z'){
        if((event.key=="Backspace" && i>1)&&(space.innerText!="Great job!!!")){
            i--;
            let div=document.getElementById("div-"+r+i);
            div.innerHTML="";
        }
        else if(event.key=="Enter" && i>5 ){
            if(c==s){
                space.innerText="Great job!!!"
            }
            for(let k=0;k<5;k++){
                let d=document.getElementById("div-"+r+(k+1))
                d.style.backgroundColor="rgb(251, 131, 131)"
                if(d.innerHTML==s[k]){
                    d.style.backgroundColor="#b5ff81"
                }
                else{
                    for(let j=0;j<5;j++){
                        if(d.innerHTML==s[j]){
                            d.style.backgroundColor="#f9eb6b"
                        }
                    }
                }
            }
            // console.log(c)
            if(c!=s){
                r++;
                i=1;
                c=""
            }
            if(r>5){
                space.innerHTML=s
                space.style.textTransform='uppercase'
                setTimeout(load,30000)
            }
        }
    }
    else{
        div.innerHTML+=event.key;
        c=c+div.innerHTML;
        i++;
    }
})
let restart=document.getElementById('space').addEventListener('click',()=>{
    location.reload();  
})