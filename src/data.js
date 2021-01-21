// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';

export const pokemons = data.pokemon;

export const example = () => {
  return 'example';
};
 
export const anotherExample = () => {
  return 'OMG';
};

//export const printData = (personajes) => {
 // const printPersonajes = 
//};


export const filterByType = (type) => {
  const filteredPokemons = pokemons.filter(function(pokemon){
    return type === pokemon.type
  });

  return  filteredPokemons;
}

export default data;
