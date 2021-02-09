import data from './data/rickandmorty/rickandmorty.js';
import {filterByGender, filterByStatus, orderData } from './data.js';

//------DECLARACIÓN DE VARIABLES---------------
let personajes = data.results;
let filGender= document.getElementById('filGender');
let filStatus= document.getElementById('filStatus');
const order = document.getElementById('order');


const female = document.getElementById('female');

document.addEventListener('DOMContentLoaded',function(){
    createCards(data.results) 
    female.addEventListener ('change', (event) => {
        console.log(event)
    const gender = event.target.value;
    const filteredData = filterByGender(data.personajes, gender)
    personajes.innerHTML=''
    //createCards(filteredData)
});  

})

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

//----------------FILTER BY Género ---------------


//---------------FILTER BY STATUS-----------------------


//---- -------------PRINT SORT-----------------------------
const order = document.getElementById('selectByOrder');
    order.addEventListener ('change', (event) => {
    const sortOrder = event.target.value;
    const orderedData = orderData(data.results, 'name', sortOrder)
    personajes.innerHTML=''
    createCards(orderedData)
});

// ---------------------ESTA PARTE YA FUNCIONA-------------------------
/* document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("page-one").style.display = "none"; //ocultar
    document.getElementById("page-two").style.display = "block"; //mostrar
    createCards(personajes);
/*});  */