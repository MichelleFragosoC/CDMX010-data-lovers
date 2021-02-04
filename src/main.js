import {filterFemale, filterMale, filterUnknown, filterAlive, filterDead, filterSunknown, orderAsc } from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

let personajes = rickandmorty.results;
let filGender= document.getElementById('filGender');
let filStatus= document.getElementById('filStatus');
let boton = document.getElementById('hamburguer');
let buttonAll = document.getElementById('showAll');
let orderA = document.getElementById('order');

//**Impresión de Género**
document.addEventListener('DOMContentLoaded',()=>{
    filGender.addEventListener('change',(e)=>{
        createCards(filterFemale(personajes,e.target.value ));
        createCards(filterMale(personajes,e.target.value ));
        createCards(filterUnknown(personajes,e.target.value ));
        console.log("Estoy escuchando el", e.target.value)
    })
});

//**Impresión de Filtro de Estado**
document.addEventListener('DOMContentLoaded',()=>{
    filStatus.addEventListener('change',(e)=>{
        createCards(filterAlive(personajes,e.target.value ));
        createCards(filterDead(personajes,e.target.value ));
        createCards(filterSunknown(personajes,e.target.value ));
        console.log("Estoy escuchando el", e.target.value)
    })
});
console.log(filterFemale(personajes, 'Female'));

//**Impresión de ordenamiento**
document.addEventListener("DOMContentLoaded",()=>{
    orderA.addEventListener('click', (e)=>{
        createCards(orderAsc(personajes,e.target.value ));
        console.log("Estoy escuchando el Ordenamiento", e.target.value)
    })
});

//**Tarjetas**
const createCards = data => {
    let showAll = data.map((element) =>{
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
 
        document.getElementById('next').addEventListener("click", function(){
            displayOne.style.display = 'none'; //Ocultar
            displayTwo.style.display = 'block'; //Mostrar
        
            createCards(personajes);

            buttonAll.addEventListener("click", ()=>{
                createCards(personajes);
            })

        // **Función del menú hamburguesa**   

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


    // //     console.log(genderUser);
    /*
    console.log(filterFemale(personajes, 'Female'));
    console.log(filterMale(personajes, 'Male'));
    console.log(filterUnknown(personajes, 'unknown'));
    console.log(filterAlive(personajes, 'Alive'));
    console.log(filterDead(personajes, 'Dead'));
    console.log(filterSunknown(personajes, 'unknown'));
    console.log(orderAsc(personajes, 'name'));
    */
   // console.log(orderDes(personajes, 'name'));
     });

    

















