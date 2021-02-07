//import { example } from './data.js';
//import data from './data/rickandmorty/rickandmorty.js';
//Importando funciones de data.js
//import {filterFemale, filterMale, filterUnknown} from './data.js'; 

import {filterFemale, filterMale, filterUnknown, filterAlive, filterDead, filterSunknown, orderAsc } from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

//------DECLARACIÓN DE VARIABLES---------------
let personajes = rickandmorty.results;
let filGender= document.getElementById('filGender');
let filStatus= document.getElementById('filStatus');
let orderA = document.getElementById('order');

//**Tarjetas**
const createCards = data => {
    let showAll = data.map((element) =>{
        return  `
            <div class="card">
                <img src="${element.image}"/> 
                <div>
                    <h4> Name: ${element.name}</h4>
                    <p class="status"> Status: ${element.status}</p>
                    <p class="gender"> Gender: ${element.gender}</p>
                    <p class="origin"> Origin: ${element.origin.name}</p>
                    <p> Species: ${element.species}</p>
                    <p> Type: ${element.type}</p>
                </div>
            </div> 
            `;
        }).join(" ");
        document.getElementById("area").innerHTML = showAll;
}
console.log(createCards)

//**Impresión de Género**
document.addEventListener('DOMContentLoaded',()=>{
    filGender.addEventListener('change',(e)=>{
        createCards(filterFemale(personajes,e.target.value ));
        createCards(filterMale(personajes,e.target.value ));
        createCards(filterUnknown(personajes,e.target.value ));
        console.log("Estoy escuchando la impresión de género", e.target.value)
    })
});

//**Impresión de Filtro de Estado**
document.addEventListener('DOMContentLoaded',()=>{
    filStatus.addEventListener('change',(e)=>{
        createCards(filterAlive(personajes,e.target.value ));
        createCards(filterDead(personajes,e.target.value ));
        createCards(filterSunknown(personajes,e.target.value ));
        console.log("Estoy escuchando el", e.target.value)
    })
});
console.log(filterFemale(personajes, 'Female'));

//**Impresión de ordenamiento**
document.addEventListener("DOMContentLoaded",()=>{
    orderA.addEventListener('click', (e)=>{
        createCards(orderAsc(personajes,e.target.value ));
        console.log("Estoy escuchando el Ordenamiento", e.target.value)
    })
});


//Función para el botón de la primer pantalla
// document.getElementById('next').addEventListener("click", function(){
//    page-one.style.display = 'none'; //Ocultar
//    page-two.style.display = 'block'; //Mostrar
//});
// ---------------------ESTA PARTE YA FUNCIONA-------------------------
document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("page-one").style.display = "none"; //ocultar
    document.getElementById("page-two").style.display = "block"; //mostrar
});




//**Impresión de Género**
//document.addEventListener('DOMContentLoaded',()=>{
//    filterByGender.addEventListener('change',(e)=>{
//        createCards(filterFemale(personajes,e.target.value ));
//        createCards(filterMale(personajes,e.target.value ));
//        createCards(filterUnknown(personajes,e.target.value ));
//        console.log("Estoy escuchando el", e.target.value)
//    })
//});

//---- -------------PRINT SORT ASC-----------------------------
// document.addEventListener("DOMContentLoaded",()=>{
//    sortAZ.addEventListener('click', (e)=>{
//        createCards(sortAsc(personajes,e.target.value ));
//        console.log("Estoy escuchando el Ordenamiento", e.target.value)
//    })
//});
//---- -------------PRINT SORT DESC-----------------------------