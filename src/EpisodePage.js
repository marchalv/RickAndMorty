import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeCharacters from './EpisodeCharacters';

function EpisodePage() {
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
        return <p>Loading...</p>;
    }

  return (
      <div className="container">
        <h1 className="text-center">{episode.name}</h1>
        <p>Code : {episode.episode}</p>
        <p>Date : {episode.air_date}</p>
        <EpisodeCharacters episodeId={episode.id} />
    </div>
  );
}

export default EpisodePage;