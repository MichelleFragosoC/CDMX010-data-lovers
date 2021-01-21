//import { pokemons } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';

document.getElementById('next').addEventListener("click", function(){
    displayOne.style.display='none'; //ocultar
    displayTwo.style.display='block'; //mostrar
});

const url = 'data/rickandmorty/rickandmorty.json';
const result = document.getElementById('area');


    document.getElementById("next").addEventListener("click", function(){
        /*let result = document.getElementById('area').innerHTML = ;*/
        /*console.log(filteredPokemons);*/

        let boton = document.getElementById('hamburguer');

        function showMenu(){
            let menu = document.getElementById('options-menu');

            if(menu.classList.contains("disabled-menu")){ /*Si el elemento contiene la lista*/
                menu.classList.remove("disabled-menu"); /*quitar clase*/
                menu.classList.add("enabled-menu"); /*agregar clase que muestra elementos*/
            }

            else{
                menu.classList.remove("enabled-menu"); /*quitar elementos de mostrar*/
                menu.classList.add("disabled-menu"); /*agregar clase que oculta el menu*/
            }
        }

        boton.addEventListener("click", showMenu);

        fetch(url)
        .then(response => response.json()) // Then: Promesas a cumplir
        .then(data => {
            
            let personajes = data.results;
            console.log(personajes)
            imprimirData(personajes) //mandando llamar la función
        });

            const imprimirData = (datos) =>{  //Parametro
                datos.forEach((element) => { //Argumento
                    let tarjetas = `
                    <section class="card" id="cards">
                    <div class="card">
                    <img src="${element.image}"/> 
                    <h2> ${element.name}</h2>
                    <p class="status"> ${element.status}</p>
                    <p class="gender"> ${element.gender}</p>
                    <p> ${element.species}</p>
                    <p> ${element.type}</p>
                    </div>
                    </section>
                    `;
                    result.insertAdjacentHTML("beforeend", tarjetas);
                });
            };


    });


//console.log(example, data);



















    //const url = 'https://rickandmortyapi.com/api/character';
//const result = document.getElementById('area');
        
        /*fetch(url)
        .then(response => response.json()) // Then: Promesas a cumplir
        .then(data => {
            
            let personajes = data.results;
            console.log(personajes)
            imprimirData(personajes) //mandando llamar la función
        });

            const imprimirData = (datos) =>{  //Parametro
                datos.forEach((element) => { //Argumento
                    let tarjetas = `
                    <article class="card">
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
                                <img src="${data.image}"/>`
            
        });*/
   





