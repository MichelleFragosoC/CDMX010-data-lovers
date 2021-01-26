//import { rickandmorty } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';


let personajes = rickandmorty.results;

document.getElementById('next').addEventListener("click", function(){
    displayOne.style.display='none'; //ocultar
    displayTwo.style.display='block'; //mostrar
});

    document.getElementById("next").addEventListener("click", function(){

        let showAll = personajes.map((element) =>{
            return  `
                <section class="card" id="cards">
                <div class="card">
                <img src="${element.image}"/> 
                <h2> Name: ${element.name}</h2>
                <p class="status"> Status: ${element.status}</p>
                <p class="gender"> Gender: ${element.gender}</p>
                <p class="origin"> Origin: ${element.origin.name}</p>
                <p> Species: ${element.species}</p>
                <p> Type: ${element.type}</p>
                </div>
                </section>
                `;
            }).join(" ");
            document.getElementById("area").innerHTML = showAll;

        // **Función del menú hamburguesa**   
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

        // **Función para el filtrado






    });


    // **Imprimir personajes con detalle por medio de fetch**

    //const url = 'https://rickandmortyapi.com/api/character';
    //const result = document.getElementById('area');

        //fetch(url)
        //.then(response => response.json()) // Then: Promesas a cumplir
        //.then(data => {
            
          //  let personajes = data.results;
            //console.log(personajes)
            //imprimirData(personajes) //mandando llamar la función
        //});

          //  const imprimirData = (datos) =>{  //Parametro
            //    datos.forEach((element) => { //Argumento
              //      let tarjetas = `
                //    <section class="card" id="cards">
                  //  <div class="card">
                    //<img src="${element.image}"/> 
                    //<h2> ${element.name}</h2>
                    //<p class="status"> ${element.status}</p>
                    //<p class="gender"> ${element.gender}</p>
                    //<p> ${element.species}</p>
                    //<p> ${element.type}</p>
                    //</div>
                    //</section>
                    //`;
                    //result.insertAdjacentHTML("beforeend", tarjetas);
                //});
            //};


    //});


//console.log(example, data);





















   





