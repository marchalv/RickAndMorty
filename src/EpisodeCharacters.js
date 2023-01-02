import React, { useState, useEffect } from 'react';
import Character from "./Character";

function EpisodeCharacters({ episodeId }) {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
            .then(response => response.json())
            .then(data => {
                const charactersUrls = data.characters;
                const charactersPromises = charactersUrls.map(url => fetch(url));
                Promise.all(charactersPromises)
                    .then(responses => Promise.all(responses.map(response => response.json())))
                    .then(charactersData => {
                        setCharacters(charactersData);
                    }
                );
            });
    }, [episodeId]);

    if (!characters) {
        return <p>Chargement des personnages...</p>;
    }

    return (
        <div>
            <h3>Personnages</h3>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Character character={character} />
                    </li>
                ))}
            </ul>
        </div>
    );


}

export default EpisodeCharacters;