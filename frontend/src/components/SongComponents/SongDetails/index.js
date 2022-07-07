import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { getSong, deleteOneSong } from '../../../store/song';
import { playSong } from '../../../store/player';
import './SongDetails.css';
import AllSongs from '../AllSongs';
import EditSongFormModal from '../EditSongFormModal';

const SongDetails = () => {
    const { songId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => (state.session.user));
    const song = useSelector(state => (state.songs[songId]));
    const history = useHistory();

    useEffect(() => {
        (dispatch(getSong(songId)))
    }, [dispatch, songId])

    const handleDeleteBtn = (songId) => {
        dispatch(deleteOneSong(songId));
        history.push("/songs");
    };

    let songEditBtns;

    if (song?.userId === user?.id) {
        songEditBtns = (
            <>
                <EditSongFormModal />
                <button className='song-action-btn' onClick={() => handleDeleteBtn(songId)}>Delete</button>
            </>
        );
    }

    const playSongBtn = useCallback((song) => {
        dispatch(playSong(song));
    }, [dispatch]);

    return (
        <>
            <div className='song-details-container'>
                <div>
                    <div className='song-details'>
                        <div>
                            <button className='detail-play-btn' onClick={() => playSongBtn(song)}>
                                <i className="fas fa-play"></i>
                            </button>
                            <div>
                                <h2 className='detail-title'>{song?.title}</h2>
                                <Link className='artist-link' to={{ pathname: `/artists/${song?.userId}` }}>
                                    <h3 className='detail-artist'>by {song?.Artist?.username}</h3>
                                </Link>
                                <h4 className='detail-description'>{song?.description}</h4>
                            </div>
                        </div>
                        <div className='edit-btns'>
                            {songEditBtns}
                        </div>
                    </div>
                    <div className='song-img-lrg' style={{ backgroundImage: 'url(' + song?.imageUrl + ')' }}>
                    </div>
                </div>
            </div>
            <AllSongs />
        </>
    );
};



export default SongDetails;