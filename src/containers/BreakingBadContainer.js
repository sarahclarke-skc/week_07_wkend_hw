import React, {useEffect, useState} from "react";
import CharacterList from "../components/CharacterList";


const BreakingBadContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        fetchBreakingBadCharacters()
    }, [])

    const fetchBreakingBadCharacters = () => {
        fetch("https://www.breakingbadapi.com/api/characters")
        .then(response => response.json())
        .then(characters => setCharacters(characters))
        console.log(characters)
    }

    const onCharacterClick = function(character) {
        setSelectedCharacter(character);
    }

    fetchBreakingBadCharacters()

    return (
       <div>
           <CharacterList characters={characters} onCharacterClick={onCharacterClick}/>
       </div>
    )

};

export default BreakingBadContainer;