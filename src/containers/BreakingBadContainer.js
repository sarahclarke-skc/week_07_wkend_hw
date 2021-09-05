import React, {useEffect, useState} from "react";
// import CharacterList from "../components/CharacterList";
import Character from "../components/Character";
import CharacterSelector from "../components/CharacterSelector";
import FavouriteCharacters from "../components/FavouriteCharacter";
// import Search from '../components/Search';


const BreakingBadContainer = () => {

    const [characters, setCharacters] = useState([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState('');

    useEffect(() => {
        fetchBreakingBadCharacters()
    }, [])

    // src/containers/BreakingBadContainer.js Line 16:8:  React Hook useEffect has a missing dependency: 'fetchBreakingBadCharacters'. Either include it or remove the dependency array  react-hooks/exhaustive-deps


    const fetchBreakingBadCharacters = () => {
        fetch("https://www.breakingbadapi.com/api/characters")
        .then(response => response.json())
        .then(characters => setCharacters(characters))
        console.log(characters) 
    }

    const handleCharacterSelected = char_id => {
        setSelectedCharacterId(char_id)
    }
  
    const selectedCharacter = characters.find(character => character.char_id === selectedCharacterId)

  console.log(selectedCharacter) //logs undefined

    const handleFavourite = (char_id) => {
        const updatedCharacters = characters.map((character) => {
          if (character.char_id === char_id){
            character.favourite = !character.favourite
          }
          return character

        })

        setCharacters(updatedCharacters)
      }

    // const onCharacterClick = function(character) {
    //     setSelectedCharacter(character);
    // }

    // fetchBreakingBadCharacters()

    return (
       <div className="main-container">
            
            <CharacterSelector characters={characters} onCharacterSelected={handleCharacterSelected} />
            <Character character={selectedCharacter} onFavourite={handleFavourite} />
            <FavouriteCharacters characters={characters} onCharacterSelected={handleCharacterSelected} />
       </div>
    )
};

export default BreakingBadContainer;

/* <CharacterList characters={characters}/> */