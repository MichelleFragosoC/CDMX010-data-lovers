// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//-------------FILTER BY GENDER--------------
export function filterByGender(personajes, gender) { 
  const filteredData = personajes.filter(function(result) {
    return result.gender === gender;  
  });
  return filteredData;
}


//----------------------FILTER GENDER-----------------------------
export function filterFemale(personajes, gender) { 
  const filterForFemale= personajes.filter(element=> element.gender === gender);
  return filterForFemale;
}

export function filterMale(personajes, gender) {
  const filterForMale= personajes.filter(element=> element.gender === gender);
  return filterForMale;
}

export function filterUnknown(personajes, gender) {
  const filterForUnkwon= personajes.filter(element=> element.gender===gender); 
  return filterForUnkwon;
}

//--------------------FILTER STATUS----------------------------


//-------------SORT DATA------------------------------
//Si el orden seleccionado es a-z, organiza y retorna la data con el nuevo orden
export const orderData = (data, sortBy, sortOrder) =>{
  if(sortBy === 'name' && sortOrder === 'sortAZ'){
      const sortAZ = data.sort((a,b) => {
      if (a.name < b.name) return -1;
      if (b.name > b.name) return 1;
      return 0;
    });
    return sortAZ;
} 
  else if (sortBy === 'name' && sortOrder === 'sortZA'){
    const sortZA = data.sort((a,b) => {
      if (a.name > b.name) return -1;
      if (b.name < b.name) return 1;
      return 0;
    });
  return sortZA;
}
}