//import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
//Importando funciones de data.js
import { filterSpecies } from './data.js'; 
let rickandmorty = data.results;
console.log(rickandmorty);



document.getElementById('next').addEventListener("click", function(){
    displayOne.style.display='none'; //ocultar
    displayTwo.style.display='block'; //mostrar
});

const showList = personajes => {
    const listChar = document.getElementById("area");
    let showAll = personajes.map((element) =>{
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

//------------------------------------------------------------------//
//document.getElementById('next').addEventListener("click", function(){
//    displayOne.style.display='none'; //ocultar
//    displayTwo.style.display='block'; //mostrar
//})

//const url = 'https://rickandmortyapi.com/api/character/23';
//const result = document.getElementById('area');

//    document.getElementById("next").addEventListener("click", function(){
//        fetch(url)
//        .then(response => response.json()) // Then: Promesas a cumplir
//        .then(data => {
                  
//            result.innerHTML = `<p> ${data.name}</p>
//                                <p> ${data.status}</p>
//                                <p> ${data.gender}</p>
//                              <p> ${data.origin}</p>
//                                <p> ${data.episode}</p>
//                                <p> ${data.species}</p>
 //                               <p> ${data.type}</p>
//                                <p> ${data.location}</p>
//                                <img src="${data.image}"/>`
//            console.log(data)
//        });
//   });

