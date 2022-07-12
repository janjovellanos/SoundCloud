import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState('');
    const songs = useSelector(state => Object.values(state.songs));

    const activeResults = songs.filter(song => (
        song.Artist?.username?.toLowerCase().includes(search.toLowerCase()) ||
        song.title.toLowerCase().includes(search.toLowerCase())
    ));

    const listResults = activeResults.map(song => (
        <Link
            to={`/songs/${song.id}`}
            key={song.id}
            onClick={() => setSearch('')}
        >
            <div>
                <div>{song.title}</div>
                <div>{song?.Artist?.username}</div>
            </div>
        </Link>
    ))


    return (
        <div className="search-bar-container">
            <form className="search-bar-form">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={() => setResults("results-active")}
                        onBlur={() => setResults("")}
                    />
                </div>
            </form>
            <div className={`search-results ${results}`}>{listResults}</div>
        </div>
    )
}
