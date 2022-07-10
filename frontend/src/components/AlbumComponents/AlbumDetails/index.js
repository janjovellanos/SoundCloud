import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as albumActions from "../../../store/album";
import { playSong } from "../../../store/player";

import './AlbumDetails.css'

const AlbumDetails = () => {
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => (state.session.user));
    const album = useSelector(state => (state.albums[albumId]));
    const albumSongs = album.Songs;
    console.log(album);
    const history = useHistory();


    useEffect(() => {
        (dispatch(albumActions.getAlbum(album)))
    }, [dispatch, albumId])

    const playSongBtn = useCallback((song) => {
        dispatch(playSong(song));
    }, [dispatch]);

    // const handleDeleteBtn = (songId) => {
    //     dispatch(deleteOneSong(songId));
    //     history.push("/albums");
    // };

    let albumEditBtns;

    if (album?.userId === user?.id) {
        albumEditBtns = (
            <>
                {/* <EditSongFormModal /> */}
                {/* <button className='album-action-btn' onClick={() => handleDeleteBtn(songId)}>Delete</button> */}
            </>
        );
    }

    // const playSongBtn = useCallback((song) => {
    //     dispatch(playSong(song));
    // }, [dispatch]);

    return (
        <>
            <div className='album-details-container'>
                <div>
                    <div className='album-details'>
                        <div>
                            {/* <button className='detail-play-btn' onClick={() => playSongBtn(song)}>
                                <i className="fas fa-play"></i>
                            </button> */}
                            <div>
                                <h2 className='detail-title'>{album?.title}</h2>
                                <Link className='artist-link' to={{ pathname: `/artists/${album?.userId}` }}>
                                    <h3 className='detail-artist'>by {album?.Artist?.username}</h3>
                                </Link>
                                {/* <h4 className='detail-description'>{song?.description}</h4> */}
                            </div>
                        </div>
                        <div className='edit-btns'>
                            {albumEditBtns}
                        </div>
                    </div>
                    <div className='album-img-lrg' style={{ backgroundImage: 'url(' + album?.imageUrl + ')' }}>
                    </div>
                </div>
            </div>
            <div className='album-songs-container'>
                <div>
                    {albumSongs.map((song) => {
                        return (
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
                                {/* <Link className='song-artist-link-text' to={{ pathname: `/users/${song.Artist?.id}` }}>{song.Artist?.username}</Link> */}
                            </li>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default AlbumDetails;
