let inputs=document.querySelectorAll("input");
let form =document.querySelector("textarea");
const opciones=document.querySelectorAll("#opcion");

opciones.forEach((opcion)=>{
    opcion.addEventListener("click",()=>{
        const menu=document.getElementById("menu1");
        const check=document.getElementById("check");
        if(check.checked){
            console.log("hola");
            check.checked=false;
        }
    })
});

form.addEventListener("keyup",(form2)=>{
    let form3=form2.target;
    let texto=form3.value;
    if(texto.length>=1){
        form3.nextElementSibling.classList.add("fijar2");
    }else{
        form3.nextElementSibling.classList.remove("fijar2");
    }
});

inputs.forEach((input)=>{
    input.addEventListener("keyup",validar);
});

function validar(evento){
    let input=evento.target;
    let texto=input.value;
    if(texto.length>=1){
        input.nextElementSibling.classList.add("fijar1");
    }else{
        input.nextElementSibling.classList.remove("fijar1"); 
    }
}

