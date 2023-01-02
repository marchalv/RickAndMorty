import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterPage from './CharacterPage';

function CharacterRoute() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
            });
    }, [id]);

    if (!character) {
        return <p>Chargement du personnage...</p>;
    }

    return <CharacterPage character={character} />;
}

export default CharacterRoute;
