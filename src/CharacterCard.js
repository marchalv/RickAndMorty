import './CharacterCard.css';
import FavButton from "./FavButton";
import {Link} from "react-router-dom";

function CharacterCard( { character} ) {
    return (
        <div className="CharacterCard img-thumbnail">
            <div>
                <Link to={`/characters/${character.id}`}>
                    <h3 className="text-center name-card">{character.name}</h3>
                    <img src={character.image} alt={character.name} className='image-card mb-2 img-fluid'/>
                </Link>
            </div>
            <FavButton character={character}/>
        </div>
    );
}

export default CharacterCard;