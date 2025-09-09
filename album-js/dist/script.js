//Array (arreglo) para las imagenes, aquí van a poner las imagenes// 
//de cada una *indivudual*//

const imagenes= [ "https://images.unsplash.com/photo-1755311903890-c0aed5dc2825?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjF8fHxlbnwwfHx8fHw%3D",
                "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsZXN8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsZXN8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsZXN8ZW58MHx8MHx8fDA%3D",
                "https://plus.unsplash.com/premium_photo-1669725687150-15c603ac6a73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbGVzfGVufDB8fDB8fHww",];

// Selección de elementos //
const boton = document.getElementById("btn-cambiar");

const imagenCard=document.getElementById("card-img");

const textoCard= document.getElementById("card-text");

//Contador de las imagenes//

let indice= 0;

//Evento del click//
boton.addEventListener("click",()=>
   {
  //Lo siguiente es para que avance la foto//
  indice++;
  
  //El siguente if es para cuando llegue al final del album regrese al inicio//
  
  if(indice>= imagenes.length){
    indice=0;
    
    //cambiar la imagen y el texto card//
    imagenCard.src=
    imagenes[indice];
    textoCard.textoContent=  `Mostrando imagen ${indice + 1} de ${imagenes.length;
});