import data from './data/rickandmorty/rickandmorty.js';
import { orderData,  } from './data.js';
import {filterByGender} from './data.js'; 

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

//------DECLARACIÓN DE VARIABLES---------------
let personajes = data.results;

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

//console.log(filterByGender(data.personajes, 'Female'))

//document.addEventListener('DOMContentLoaded',()=>{
//const genderFemale = document.getElementById('selectByGender');
//genderFemale.addEventListener('change', (event) => {
//    const gender = event.target.value;     
//    const filteredCharacters = filterByGender(data.results, gender) 
//    personajes.innerHTML=''
//    createCards(filteredCharacters)
//})
//const filMale = document.getElementById('filterMale');
//filMale.addEventListener('click', (event) => {
//    const gender = event.target.value;     
//    const filteredCharacters = filterByGender(data.results, gender) 
//    personajes.innerHTML=''
//    createCards(filteredCharacters)
//})
//})

//***********Impresión de Filtro de Estado*******************
//document.addEventListener('DOMContentLoaded',()=>{
//    filterByStatus.addEventListener('change',(e)=>{
//        createCards(filterAlive(personajes,e.target.value ));
//        createCards(filterDead(personajes,e.target.value ));
//        createCards(filterSunknown(personajes,e.target.value ));
 //       console.log("Estoy escuchando el", e.target.value)
//    })
//});
//console.log(filterFemale(personajes, 'Female'));


// ---------------------ESTA PARTE YA FUNCIONA-------------------------
/* document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("page-one").style.display = "none"; //ocultar
    document.getElementById("page-two").style.display = "block"; //mostrar
    createCards(personajes);
/*});  */

//**Impresión de Género**
//document.addEventListener('DOMContentLoaded',()=>{
//    filterByGender.addEventListener('change',(e)=>{
//        createCards(filterFemale(personajes,e.target.value ));
//        createCards(filterMale(personajes,e.target.value ));
//        createCards(filterUnknown(personajes,e.target.value ));
//        console.log("Estoy escuchando el", e.target.value)
//    })
//});

//---------------FILTER BY STATUS-----------------------


//---- -------------PRINT SORT-----------------------------
const order = document.getElementById('selectByOrder');
    order.addEventListener ('change', (event) => {
    const sortOrder = event.target.value;
    const orderedData = orderData(data.results, 'name', sortOrder)
    personajes.innerHTML=''
    createCards(orderedData)
});