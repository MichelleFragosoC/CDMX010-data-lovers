import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';

document.getElementById('next').addEventListener("click", function(){
    displayOne.style.display='none'; //ocultar
    displayTwo.style.display='block'; //mostrar
})

const url = 'https://rickandmortyapi.com/api/character';
const result = document.getElementById('area');

    document.getElementById("next").addEventListener("click", function(){
        fetch(url)
        .then(response => response.json()) // Then: Promesas a cumplir
        .then(data => {
            
            let personajes = data.results;
            console.log(personajes)
            imprimirData(personajes)
        });

            const imprimirData = (datos) =>{  //Parametros(datos)
                datos.forEach((element) => {
                    let tarjetas = `
                    <article>
                    <img src="${element.image}"/> 
                    <p> ${element.name}</p>
                    <p> ${element.status}</p>
                    <p> ${element.gender}</p>
                    <p> ${element.origin}</p>
                    <p> ${element.episode}</p>
                    <p> ${element.species}</p>
                    <p> ${element.type}</p>
                    <p> ${element.location}</p>
                    </article>
                    `;
                    result.insertAdjacentHTML("beforeend", tarjetas);
                });
            };

            
           /* result.innerHTML = `<p> ${data.name}</p>
                                <p> ${data.status}</p>
                                <p> ${data.gender}</p>
                                <p> ${data.origin}</p>
                                <p> ${data.episode}</p>
                                <p> ${data.species}</p>
                                <p> ${data.type}</p>
                                <p> ${data.location}</p>
                                <img src="${data.image}"/>`*/
            
        });
   





//console.log(example, data);
