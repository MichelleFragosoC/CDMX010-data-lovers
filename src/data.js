// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//-------------FILTER BY GENDER--------------
export const filterByGender = function(personajes, gender) { 
  const filteredData = personajes.filter(function(result) {
    return result.gender === gender;  
  });
  return filteredData;
};

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
//export function filterAlive(personajes, status) {
//  const filterForAlive= personajes.filter(element=> element.status === status);
//  return filterForAlive;
//}

//export function filterDead(personajes, status) {
//  const filterForDead= personajes.filter(element=> element.status === status);  
//  return filterForDead;
//}

//export function filterSunknown(personajes, status) {
//  const filterUnknown= personajes.filter(element=> element.status === status);
//  return filterUnknown;
//}

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
  
  else if (sortBy === 'name' && sortOrder === 'orderZa'){
    const orderZa = data.sort((a,b) => {
      if (a.name > b.name) return -1;
      if (b.name < b.name) return 1;
      return 0;
    });
  return orderZa;
}
}