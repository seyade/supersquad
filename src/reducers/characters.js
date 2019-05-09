import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';
import charactersData from '../data/characters.json';

export default function characters(state = charactersData, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;

    case REMOVE_CHARACTER:
      characters = [...state, createCharacter(action.id)];
      return characters;

    default:
      return state;
  }
}
