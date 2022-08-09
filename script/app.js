let celdas=["","","","","","","","","",]
let jugadorActual="X"
let resultado=document.querySelector(".resul")
let botones=document.querySelectorAll(".btn")
let poosibiliadesDeGanar=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
]
// desde aca empieza la logica 
const triki=(element,i)=>{
element.value=jugadorActual;
element.disabled=true;
celdas[i]=jugadorActual


if(jugadorActual=="X"){
    jugadorActual="o";
}else{
    jugadorActual="X";
}
resultado.innerHTML=`player${jugadorActual}`

for (let i = 0; i < poosibiliadesDeGanar.length; i++) {
    poosibilidad=poosibiliadesDeGanar[i];
    let a=celdas[poosibilidad[0]];
    let b=celdas[poosibilidad[1]];
    let c=celdas[poosibilidad[2]];
 
    if (a==""||b==""||c==""){
        continue;
    }
    if (a==b &&b==c){
        resultado.innerHTML=`player ${a}has ganado  ✔`
        botones.forEach((btn)=>{btn.disabled=true})
    }
 
 
 
 }
}

const reset=()=>{
    celdas=["","","","","","","","","",]
    botones.forEach( (element)=>{
        element.value="";
        element.disabled=false;
    }
  )
  jugadorActual="X"
  resultado.innerHTML=`player ${jugadorActual}turn`
};

document.querySelector("#reset").addEventListener("click",reset)


botones.forEach((element,i)=>{
    element.addEventListener('click',()=>{triki(element,i)})
})

