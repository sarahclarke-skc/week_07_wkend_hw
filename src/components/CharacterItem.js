import React from 'react';

const CharacterItem = ({character, onCharacterClick}) => {

    const handleClick = function(){
        onCharacterClick(character);
    }

    return <li onClick={handleClick}>{character.name}</li>
}

export default CharacterItem;