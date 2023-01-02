import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import EpisodePage from "./EpisodePage";

function EpisodeRoute() {
    const {id} = useParams();
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(response => response.json())
            .then(data => {
                setEpisode(data);
            });
    }, [id]);

    if (!episode) {
        return <p>Chargement de l'épisode...</p>;
    }

    return <EpisodePage episode={episode} />;
}

export default EpisodeRoute;