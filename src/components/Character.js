import React from 'react';

const Character = ({character, onFavourite}) => { //the props character from here is undefined, meaning none of the return statement loads, so selectedCharacter function in the container can't be working

    if (!character) {
        return null
      }

    const handleClick = () => {
        onFavourite(character.char_id) //onFavourite also isn't working correcting, meaning handleFavourite isn't
    }

    // const pictureStyle = {
    //    height: '200px',
    //    width: 'auto'
    // }


    return (
        <>
            <h3>Name: {character.name}</h3>
            <img src={character.img} alt={`Photo of ${character.name}`}>Played by {character.portrayed}</img>
            <button onClick={handleClick}>Add/Remove from Favourites</button>
        </>
    )
}

export default Character;

/* <div className="characters">
            <img style={pictureStyle} src={character.img}/>
            <li>Character: {character.name}</li>
            <li>Nickname: {character.nickname}</li>
            <li>Fate: {character.status}</li>
            <li>Played by: {character.portrayed}</li>
        </div> */