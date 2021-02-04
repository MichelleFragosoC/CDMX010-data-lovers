import { example, anotherExample, filterByType } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns poison pokemons when the type passed is poison', () => {
    const pokemons = filterByType('poison')
    expect(pokemons.length).toBe(30);
  });
});
