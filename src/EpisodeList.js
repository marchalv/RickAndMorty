import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

    const fetchEpisodes = async () => {
        const page1Episodes = await getEpisodes(1);
        const page2Episodes = await getEpisodes(2);
        const page3Episodes = await getEpisodes(3);
        const allEpisodes = [...page1Episodes, ...page2Episodes, ...page3Episodes];
        setEpisodes(allEpisodes);
    };

    fetchEpisodes();

    useEffect(() => {
        getEpisodes().then(episodes => {
            setEpisodes(episodes);
        });
    }, []);

    return (
        <div>
            <h2>Liste des épisodes</h2>
            <ul>
                {episodes.map(episode => (
                    <li key={episode.id}>
                        {episode.episode} - <Link to={`/episodes/${episode.id}`}>{episode.name}</Link> ({episode.air_date})
                    </li>
                ))}
            </ul>
        </div>
    );
}

async function getEpisodes(page) {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
}

export default EpisodeList;