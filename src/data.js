// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//Filtrado por especie
export const filterSpecies = (rickandmorty, value) => {
  const array = [];

  rickandmorty.forEach((object) => {
    object.species.forEach((select_species) => {
      if (select_species === value) {
        array.push(object);
      }
    });
  });
  return array;
};


//------------------------------------------------
