import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as albumActions from "../../../store/album";
import { playSong } from "../../../store/player";
import CreateSongFormModal from '../../SongComponents/CreateSongModal';
import EditAlbumFormModal from '../EditAlbumModal';

import './AlbumDetails.css'

const AlbumDetails = () => {
    const { albumId } = useParams();
    const user = useSelector(state => (state.session.user));
    const album = useSelector(state => (state.albums[albumId]));
    const albumSongs = album?.Songs;
    let songCount = 0;

    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        dispatch(albumActions.getAlbum(+albumId))
    }, [dispatch, album])

    const playSongBtn = useCallback((song) => {
        dispatch(playSong(song));
    }, [dispatch]);

    const handleDeleteBtn = (albumId) => {
        dispatch(albumActions.deleteOneAlbum(+albumId));
        history.push("/albums");
    };

    let albumEditBtns;

    if (album?.userId === user?.id) {
        albumEditBtns = (
            <>
                <EditAlbumFormModal />
                <button className='album-action-btn' onClick={() => handleDeleteBtn(albumId)}>Delete</button>
                <div className='album-upload-song-btn'>
                    <CreateSongFormModal />
                </div>
            </>
        );
    }

    return (
        <>
            <div className='album-details-container' style={{ backgroundImage: 'url(' + album?.imageUrl + ')' }}>
                <div>
                    <div className='album-details'>
                        <div>
                            <div className='album-text-details'>
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
                    {/* <div className='album-img-lrg'>
                    </div> */}
                </div>
            </div>
            <div className='album-songs-container'>
                <div>
                    {albumSongs?.map((song) =>
                    (
                        <li key={song.id} className='album-song-container'>
                            <Link className='album-song-title-link' to={{ pathname: `/songs/${song.id}` }}>
                                <p>{++songCount}. {song.title}</p>
                            </Link>
                            <button className='album-play-btn list-style-album-play-btn' onClick={() => playSongBtn(song)}>
                                <i className="fas fa-play"></i>
                            </button>
                            {/* <div className='play-animation'> */}
                            {/* <div className='song-cover-img' style={{ backgroundImage: `url(${song.imageUrl})` }}>
                                </div> */}
                            {/* </div> */}
                            {/* <Link className='song-artist-link-text' to={{ pathname: `/users/${song.Artist?.id}` }}>{song.Artist?.username}</Link> */}
                        </li>
                    )
                    )}
                </div>
            </div>
        </>
    );
};

export default AlbumDetails;
