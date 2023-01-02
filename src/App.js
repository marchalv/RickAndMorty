import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Home from './Home';
import CharacterRoute from './CharacterRoute';
import MenuTop from "./menuTop";
import EpisodeRoute from "./EpisodeRoute";
import FavoritesList from "./FavoritesList";
import EpisodeList from "./EpisodeList";

function App() {

    return (
        <div>
            <div>
                <MenuTop />
            </div>
            <Router>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters/:id" element={<CharacterRoute />} />
                        <Route path="/episodes/:id" element={<EpisodeRoute />} />
                        <Route path="favorites" element={<FavoritesList />} />
                        <Route path={"episodes"} element={<EpisodeList />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;