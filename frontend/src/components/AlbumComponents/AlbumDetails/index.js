import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as albumActions from "../../../store/album";

import './AlbumDetails.css'

const AlbumDetails = () => {
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => (state.session.user));
    const album = useSelector(state => (state.album[albumId]));
    const history = useHistory();

    useEffect(() => {
        (dispatch(albumActions.getAlbum(albumId)))
    }, [dispatch, albumId])

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
            {/* <AllSongs /> */}
        </>
    );
};

export default AlbumDetails;
