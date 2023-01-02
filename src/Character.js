import { Link } from 'react-router-dom';
import FavButton from "./FavButton";
import './Character.css';

function Character({ character }) {

    return (
        <div>
            <Link to={`/characters/${character.id}`}>
                <img src={character.image} alt={character.name} className='character-icon'/>
                {character.name}
            </Link>
            <FavButton character={character}/>
        </div>
    );
}

export default Character;