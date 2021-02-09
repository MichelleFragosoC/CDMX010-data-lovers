import data from './data/rickandmorty/rickandmorty.js';
import {filterByGender, filterByStatus, orderData } from './data.js';

//------DECLARACIÓN DE VARIABLES---------------
let personajes = data.results;
let filGender= document.getElementById('filGender');
let filStatus= document.getElementById('filStatus');
const order = document.getElementById('order');


document.addEventListener('DOMContentLoaded',function(){
    createCards(data.results) 
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

document.addEventListener('DOMContentLoaded',()=>{
    
    filStatus.addEventListener('change',(e)=>{
        const userStatus = e.target.value;

            console.log("Estoy escuchando el", userStatus)
    
            if(userStatus === "ali"){
                const statusA = filterByStatus(personajes, 'Alive', userStatus);
                createCards(statusA);
            }
            else if(userStatus === "dea"){
                const statusD = filterByStatus(personajes, 'Dead', userStatus);
                createCards(statusD); 
            }
            else if(userStatus === "uns"){
                const statusU = filterByStatus(personajes, 'unknown', userStatus);
                createCards(statusU); 
            }
            else{
                console.log('Nada');
            } 

 
         console.log("Estoy escuchando el", e.target.value)
     })

     filGender.addEventListener('change',(e)=>{

        const user = e.target.value;
        console.log("Estoy escuchando el",user)

        if(user === "fem"){
            const genderF = filterByGender(personajes, 'Female', user);
            createCards(genderF);
        }
        else if(user === "mal"){
            const genderM = filterByGender(personajes, 'Male', user);
            createCards(genderM); 
        }
        else if(user === "unk"){
            const genderU = filterByGender(personajes, 'unknown', user);
            createCards(genderU); 
        }
        else{
            console.log('Nada');
        }
    })

        order.addEventListener ('change', (event) => {
            const sortOrder = event.target.value;
            const orderedData = orderData(personajes, 'name', sortOrder)
            createCards(orderedData);
        })

});



//----------------FILTER BY Género ---------------


//---------------FILTER BY STATUS-----------------------

//---- -------------PRINT SORT-----------------------------
/* const order = document.getElementById('selectByOrder');
    order.addEventListener ('change', (event) => {
    const sortOrder = event.target.value;
    const orderedData = orderData(data.results, 'name', sortOrder)
    personajes.innerHTML=''
    createCards(orderedData)
}); */

// ---------------------ESTA PARTE YA FUNCIONA-------------------------
/* document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("page-one").style.display = "none"; //ocultar
    document.getElementById("page-two").style.display = "block"; //mostrar
    createCards(personajes);
/*});  */