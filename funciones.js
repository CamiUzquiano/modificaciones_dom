//Estamos añadiendo un evento, el cual estámos verificando si el DOM está cargado, ademáss ponemos una función anónima (es anónima porque no está siendo nombrada)
document.addEventListener("DOMContentLoaded",function(){
    //alert("Se cargó el DOM"); //se está poniendo que salga una alerta cuando el DOM está cargado
}); 
document.addEventListener("DOMContentLoaded",()=>{
    //definir ki que sucede cuando el evento arranca
    const colores = ["yellow","purple","blue"]; //se usa [] para crear un arreglo o array
    const secciones = document.querySelectorAll("section");
    //identificar los elementos que quiero utilizar
    const container = document.querySelector(".container");
    const botonCrea = document.querySelector(".controles button");

    //evento
    botonCrea.addEventListener("click",()=>{
        //creamos los elementos
        const nuevaSeccion = document.createElement("section");
        nuevaSeccion.textContent="Esta sección se generó dinámicamente";
        nuevaSeccion.style.background="white";

        container.appendChild(nuevaSeccion);
    });

    secciones.forEach((seccion,index)=>{
        seccion.textContent=`Sección ${index+1}`;
        seccion.style.border="3px solid black";
        seccion.style.borderRadius=`${index*10}px`;
        seccion.style.background=colores[index];
        /* en JS las propiedades se escriben en formato camelCase:
        backgrpundColor
        paddignLeft
        En lugar de CSS:
        background-color
        padding-left*/
    });
});