import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as songActions from '../../../store/song';
import * as artistActions from '../../../store/artist';
import { playSong } from "../../../store/player";

import './AllSongs.css';

const AllSongs = () => {
    const dispatch = useDispatch();

    const songs = useSelector(state => Object.values(state.songs));
    const artists = useSelector(state => Object.values(state.artists));


    useEffect(() => {
        dispatch(songActions.getAllSongs());
        dispatch(artistActions.getAllArtists());
    }, [dispatch]);

    const playSongBtn = useCallback((song) => {
        dispatch(playSong(song));
    }, [dispatch]);


    if (!songs) return null;

    songs?.sort((a, b) => {
        return b.id - a.id;
    })

    return (
        <div className='all-songs-container'>
            <h2>Sounds around the world</h2>
            <div>
                {songs.map((song) => (
                    <li key={song.id} className='song-container'>
                        <div className='song-cover-img' style={{ backgroundImage: `url(${song.imageUrl})` }}>
                            <div className='play-animation'>
                                <button className='play-btn list-style-play-btn' onClick={() => playSongBtn(song)}>
                                    <i className="fas fa-play"></i>
                                </button>
                            </div>
                        </div>
                        <Link className='song-title-link' to={{ pathname: `/songs/${song.id}` }}>
                            <p>{song.title}</p>
                        </Link>
                        <p>by {artists?.find(artist => artist.id === song.userId)?.username}</p>
                    </li>
                )
                )}
            </div>
        </div>)
}

export default AllSongs;
