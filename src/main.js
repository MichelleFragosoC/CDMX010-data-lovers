//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

document.getElementById('next').addEventListener("click", function(){
    displayOne.style.display='none'; //ocultar
    displayTwo.style.display='block'; //mostrar
})

const url = 'https://rickandmortyapi.com/api/character/23';
const result = document.getElementById('area');

    document.getElementById("next").addEventListener("click", function(){
        fetch(url)
        .then(response => response.json()) // Then: Promesas a cumplir
        .then(data => {
                  
            result.innerHTML = `<p> ${data.name}</p>
                                <p> ${data.status}</p>
                                <p> ${data.gender}</p>
                                <p> ${data.origin}</p>
                                <p> ${data.episode}</p>
                                <p> ${data.species}</p>
                                <p> ${data.type}</p>
                                <p> ${data.location}</p>
                                <img src="${data.image}"/>`
            console.log(data)
        });
   });



   //INTENTOS MICH-------------------------------------
// import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
/*import data from './data/rickandmorty/rickandmorty.js';
//Pantalla de INICIO
document.getElementById('displayOne').style.display='block';
document.getElementById('displayTwo').style.display='none';

//BOTÓN COMENZAR
document.getElementById('start').addEventListener('click', () =>{
    document.getElementById('displayOne').style.display='none';
    document.getElementById('displayTwo').style.display='block';
  });

//Fetch del json que contiene la data de los pokemones
/*const jsonFile = './data/rickandmorty/rickandmorty.js';
let jsonRickMorty = "";
fetch(jsonFile)
  .then(response => response.json())
  .then(jsonData => {
    initialWindow(jsonData);
    return jsonPokemon = jsonData;
  })*/

//Imprime tarjetas de todos los pokemones al cargar la pagina
/*const initialWindow = (jsonRickMorty) => {

}*/

/*console.log(example, data);*/