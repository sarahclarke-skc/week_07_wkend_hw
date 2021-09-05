import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({characters, onCharacterClick}) => {
    const charactersItems = characters.map((character, index) => {
        return <CharacterItem character={character} key={index} onCharacterClick={onCharacterClick}/>
    })

    return (
        <div>
            <ul>
                {charactersItems}
            </ul>
        </div>
    )
}

export default CharacterList;