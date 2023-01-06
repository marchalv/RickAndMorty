import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
//import CharacterCard from './CharacterCard';
import Character from './Character';

function FavoritesList() {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                const nCharacters = data.info.count;
                const favoriteCharacters = [];
                for (let i = 0; i < nCharacters; i++) {
                    const favoriteCookie = Cookies.get(`favorite-${i}`);
                    if (favoriteCookie) {
                        fetch(`https://rickandmortyapi.com/api/character/${i}`)
                            .then(response => response.json())
                            .then(data => {
                                favoriteCharacters.push(data);
                                setCharacters(favoriteCharacters);
                            }
                        );
                    }
                }
                setCharacters(favoriteCharacters);
            }
        );
    }
    , []);

    if (characters.length === 0) {
        return (
            <div>
                <h2>Personnages favoris</h2>
                <p>Aucun favoris</p>
                <a href={'/episodes'}>Retour à la liste des épisodes</a>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Mes personnages favoris</h2>
                {characters.map(character => (
                    <Character key={character.id} character={character}/>
                ))}
            </div>
        );
    }
}

export default FavoritesList;