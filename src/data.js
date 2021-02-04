// estas funciones son de ejemplo
//import data from './data/pokemon/pokemon.js';
//import rickandmorty from './data/rickandmorty/rickandmorty.js';
//import { data } from './data.js';
//export const rickandmorty = data.results;

//export const pokemons = data.pokemon;

export const example = () => {
  return 'example';
};
 
export const anotherExample = () => {
  return 'OMG';
};

//export const printData = (personajes) => {
 // const printPersonajes = 
//};

// export function filterFemale(personajes, gender) {

//   const filterForFemale= personajes.filter(allData=> allData.gender===gender);
  
//   return filterForFemale;
// };

export function filterFemale(personajes, gender) {
  
  const filterForFemale= personajes.filter(element=> element.gender === gender);
  return filterForFemale;
};

export function filterMale(personajes, gender) {

  const filterForMale= personajes.filter(element=> element.gender === gender);
  
  return filterForMale;
};

export function filterUnknown(personajes, gender) {

  const filterForUnkwon= personajes.filter(element=> element.gender===gender);
  
  return filterForUnkwon;
};

export function filterAlive(personajes, status) {

  const filterForAlive= personajes.filter(element=> element.status === status);
  
  return filterForAlive;
};

export function filterDead(personajes, status) {

  const filterForDead= personajes.filter(element=> element.status === status);
  
  return filterForDead;
};

export function filterSunknown(personajes, status) {

  const filterUnknown= personajes.filter(element=> element.status === status);
  
  return filterUnknown;
};

export function orderAsc(personajes, name) {

  const orderName = personajes.sort((a,b) => a.name.localeCompare(b.name));
  return orderName;

};

// export function orderDes(personajes, name) {

//   const orderName2 = personajes.sort((a,b) => b.name.localeCompare(a.name));
//   return orderName2;

// };

//const orderName = personajes.sort((a,b) => a.name > b.name);

//export default data;
