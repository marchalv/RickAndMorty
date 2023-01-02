import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterPage.css';
import CharacterEpisodes from "./CharacterEpisodes";
import FavButton from "./FavButton";

function CharacterPage() {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
            });
    }, [id]);

    if (!character) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <h1 className="text-center">
                {character.name}
                <FavButton character={character}/>
            </h1>
            <div className="img-thumbnail">
                <img src={character.image} alt={character.name} className='rounded mx-auto d-block' />
                <div className="caption text-center">{character.name}</div>
            </div>
            <div>
                <h3>Informations</h3>
                <p>Status : {character.status}</p>
                <p>Sexe : {character.gender}</p>
                <p>Type : {character.type}</p>
                <p>Especes : {character.species}</p>
                <p>Origine : {character.origin.name}</p>
            </div>
            <br/>
            <div>
                <h3>Episodes</h3>
                <CharacterEpisodes characterId={character.id} />
            </div>
        </div>
    );
}

export default CharacterPage;
