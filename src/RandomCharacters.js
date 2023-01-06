import React, { useState, useEffect } from 'react';
import Character from './Character';

function RandomCharacters() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                const nCharacters = data.info.count;
                const randomCharacterIds = [];
                const randomCharacters = [];
                for (let i = 0; i < 5; i++) {
                    let randomIndex = Math.floor(Math.random() * nCharacters);
                    while (randomCharacterIds.includes(randomIndex)) {
                        randomIndex = Math.floor(Math.random() * nCharacters);
                    }
                    randomCharacterIds.push(randomIndex);
                    fetch(`https://rickandmortyapi.com/api/character/${randomIndex}`)
                        .then(response => response.json())
                        .then(data => {
                            randomCharacters.push(data);
                            setCharacters(randomCharacters);
                        }
                    );
                }
                setCharacters(randomCharacters);
            });
    }, []);
    console.log(characters);
    return (
        <div>
            <h2>5 personnages aléatoires</h2>
            {characters.map((character) => (
                <Character
                    key={character.id}
                    character={character}
                />
            ))}
        </div>
    );
}

export default RandomCharacters;
