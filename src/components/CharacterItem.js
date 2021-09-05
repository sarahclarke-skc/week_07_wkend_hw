import React from 'react';

const CharacterItem = ({character, onCharacterClick}) => {

    const handleClick = function(){
        onCharacterClick(character);
    }

    const pictureStyle = {
       height: '200px',
       width: 'auto'
    }

    return (
        <div>
            <img style={pictureStyle} src={character.img}/>
            <li onClick={handleClick}>Character: {character.name}</li>
            <li onClick={handleClick}>Nickname: {character.nickname}</li>
            <li onClick={handleClick}>Fate: {character.status}</li>
            <li onClick={handleClick}>Played by: {character.portrayed}</li>
        </div>
    )

}

export default CharacterItem;