import React from 'react';

const FavouriteCharacters = ({ characters, onCharacterSelected }) => {

    const favouriteCharacters = characters.filter(character => character.favourite)
  
    return (
      <>
        <h3>Favourite Characters:</h3>
        <ul>
          {favouriteCharacters.map(character => {
            return (
              <li key={character.char_id}>
                <button onClick={() => onCharacterSelected(character.char_id)}>{character.name}</button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
  
  export default FavouriteCharacters;