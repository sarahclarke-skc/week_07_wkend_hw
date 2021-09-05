import React from 'react';

const CharacterSelector = ({ characters, onCharacterSelected }) => {

    const handleChange = e => {
      onCharacterSelected(e.target.value)
    }
  
    return (
      <select defaultValue="" onChange={handleChange}>
        <option value="" disabled>Choose a character</option>
        {characters.map(character => {
          return (
            <option key={character.char_id} value={character.char_id}>{character.name}</option>
          )    
        })}
      </select>
    )
  }
  
  export default CharacterSelector;