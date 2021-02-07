// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//-------------FILTER BY GENDER--------------
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

export function filterAlive(personajes, status) {
  const filterForAlive= personajes.filter(element=> element.status === status);
  return filterForAlive;
}

export function filterDead(personajes, status) {
  const filterForDead= personajes.filter(element=> element.status === status);  
  return filterForDead;
}

export function filterSunknown(personajes, status) {
  const filterUnknown= personajes.filter(element=> element.status === status);
  return filterUnknown;
}

export function orderAsc(personajes, name) {
  const orderName = personajes.sort((a,b) => a.name.localeCompare(b.name));
  return orderName;

}

//--------------SORT ASC ---------------------
//export const sortAsc (personajes, name) => {
//  const sortName = personajes.sort((a,b) => a.name.localeCompare(b.name));
//  return sortName;
//};


//-------------SORT DESC------------------------------
//export const sortDesc (personajes, name) => {
//  return 
//};

/* export const sortData (data, name) => {
  const sortAsc = data;
  if (sortAsc === "az") {
    data.sort (function (a,b){
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    })
  }
  return sortAsc;
}
  const sortDesc = data;
  if (sortDesc === "za") {

    data.sort(function (a, b) {
    if (b.name < a.name) {
      return -1;
    }
    if (b.name > a.name) {
      return 1;
    }
  })
  return sortDesc;
}; */