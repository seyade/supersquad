import charactersData from '../data/characters.json';

export function createCharacter(id) {
  let theCharacter = charactersData.find(character => character.id === id);
  return theCharacter;
}
