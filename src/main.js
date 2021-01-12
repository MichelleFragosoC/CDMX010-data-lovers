import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';

document.getElementById('next').addEventListener("click", function(){
    displayOne.style.display='none'; //ocultar
    displayTwo.style.display='block'; //mostrar
})

const url = 'https://rickandmortyapi.com/api/character/423';
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






console.log(example, data);
