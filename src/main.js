import { orderData } from './data.js';
//import data from './data/rickandmorty/rickandmorty.js';
//Importando funciones de data.js
//import {filterFemale, filterMale, filterUnknown} from './data.js'; 

import data from './data/rickandmorty/rickandmorty.js';
//import {filterFemale, filterMale, filterUnknown, filterAlive, filterDead, filterSunknown,  } from './data.js';
//import {orderData, filterByGender, filterFemale, filterMale, filterUnknown} from './data.js';

document.addEventListener('DOMContentLoaded',function(){
    createCards(data.results)    
})

//------DECLARACIÓN DE VARIABLES---------------
let personajes = data.results;
//let filterByGender= document.getElementById('filterByGender');
//let filterByStatus= document.getElementById('filterByStatus');
//let orderA = document.getElementById('order');

//----Imprimer CARD de personajes-----------
const createCards = data => {
    let showAll = data.map((element) =>{
        return  `
            <div class="card">
                <img src="${element.image}"/> 
                <div>
                    <h4> Name: ${element.name}</h4>
                    <p class="status">  Status: ${element.status}</p>
                    <p class="gender">  Gender: ${element.gender}</p>
                    <p class="origin">  Origin: ${element.origin.name}</p>
                    <p class="species"> Species: ${element.species}</p>
                    <p class="type">    Type: ${element.type}</p>
                </div>
            </div> 
            `;
        }).join(" ");
        document.getElementById("area").innerHTML = showAll;
}
//console.log(personajes)

//Filter Género
/* document.addEventListener('DOMContentLoaded',()=>{
const radioFemale = document.getElementById('filterFemale');
radioFemale.addEventListener('click', (event) => {
    const gender = event.target.value;     
    const filteredCharacters = filterByGender(data.results, gender) 
    personajes.innerHTML=''
    createCards(filteredCharacters)
})
const radioMale = document.getElementById('filterMale');
radioMale.addEventListener('click', (event) => {
    const gender = event.target.value;     
    const filteredCharacters = filterByGender(data.results, gender) 
    personajes.innerHTML=''
    createCards(filteredCharacters)
})
})
document.addEventListener('DOMContentLoaded',()=>{
const radioUnknownGender = document.getElementById('filterUnknown');
radioUnknownGender.addEventListener('click', (event) => {
    const gender = event.target.value;     
    const filteredCharacters = filterByGender(data.results, gender) 
    personajes.innerHTML=''
    createCards(filteredCharacters)
})
})   */

//**Impresión de Género**
//document.addEventListener('DOMContentLoaded',()=>{
//    filterByGender.addEventListener('change',(e)=>{
//        createCards(filterFemale,(personajes,e.target.value ));
//        createCards(filterMale, (personajes,e.target.value ));
//        createCards(filterUnknown, (personajes,e.target.value ));
//        console.log("Estoy escuchando la impresión de género", e.target.value)
//    })
//});

//**Impresión de Filtro de Estado**
//document.addEventListener('DOMContentLoaded',()=>{
//    filterByStatus.addEventListener('change',(e)=>{
//        createCards(filterAlive(personajes,e.target.value ));
//        createCards(filterDead(personajes,e.target.value ));
//        createCards(filterSunknown(personajes,e.target.value ));
 //       console.log("Estoy escuchando el", e.target.value)
//    })
//});
//console.log(filterFemale(personajes, 'Female'));

//**Impresión de ordenamiento**
//document.addEventListener("DOMContentLoaded",()=>{
//    orderA.addEventListener('click', (e)=>{
//        createCards(orderAsc(personajes,e.target.value ));
//        console.log("Estoy escuchando el Ordenamiento", e.target.value)
//    })
//});

// ---------------------ESTA PARTE YA FUNCIONA-------------------------
document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("page-one").style.display = "none"; //ocultar
    document.getElementById("page-two").style.display = "block"; //mostrar
    createCards(personajes);
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


//---- -------------PRINT SORT-----------------------------
//Ordenamiento
const order = document.getElementById('select-order');
    order.addEventListener ('change', (event) => {
    const sortOrder = event.target.value;
    const orderedData = orderData(data.results, 'name', sortOrder)
    personajes.innerHTML=''
    createCards(orderedData)
}) 