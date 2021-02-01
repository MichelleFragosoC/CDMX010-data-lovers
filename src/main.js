import {filterFemale, filterMale, filterUnknown, filterAlive, filterDead, filterSunknown, orderAsc, orderDes } from './data.js';
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

      //const buttonFilter = document.getElementById("select_filter");
      //const genderUser = document.getElementById("filGender");
      const female =document.getElementById("female");
      const male =document.getElementById("male");
      console.log(female.value);
      console.log(male.value);

      
     // const usuario = genderUser.value;
      //console.log(usuario);
        //  female.addEventListener("", function(){
        //      alert('hola');
        //  });

//         female.addEventListener("change", () => {

//             console.log(filterForFemale);
//     //         let filterGender = personajes.filter(f => f.gender === female.value)
//         filterForFemale.forEach((element)=>{
//                 return  `
//                 <div class="card">
//                     <img src="${element.image}"/> 
//                     <div>
//                         <h4> Name: ${element.name}</h4>
//                         <p class="status"> Status: ${element.status}</p>
//                         <p class="gender"> Gender: ${element.gender}</p>
//                         <p class="origin"> Origin: ${element.origin.name}</p>
//                         <p> Species: ${element.species}</p>
//                         <p> Type: ${element.type}</p>
//                     </div>
//                 </div> 
//                 `
//             }).join(" ");
//             document.getElementById("area").innerHTML = filterFemale;
//   console.log(filterForFemale);

//         });

    // //     console.log(genderUser);
    console.log(filterFemale(personajes, 'Female'));
    console.log(filterMale(personajes, 'Male'));
    console.log(filterUnknown(personajes, 'unknown'));
    console.log(filterAlive(personajes, 'Alive'));
    console.log(filterDead(personajes, 'Dead'));
    console.log(filterSunknown(personajes, 'unknown'));
    console.log(orderAsc(personajes, 'name'));
    console.log(orderDes(personajes, 'name'));
     });

    

















