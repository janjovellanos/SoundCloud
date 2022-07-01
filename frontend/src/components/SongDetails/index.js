import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
// import { getAllSongs } from '../../store/song';
import { getSong } from '../../store/song';
import { playSong } from '../../store/player';
import './SongDetails.css';

const SongDetails = () => {
    const { songId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => (state.session.user));
    const song = useSelector(state => (state.songs[songId]));
    const history = useHistory();

    useEffect(() => {
        (dispatch(getSong(songId)))
    }, [dispatch, songId])

    const handleEditBtn = (songId) => {
        history.push(`/songs/${songId}/edit`);
    };

    let songEditBtns;

    if (song?.userId === user?.id) {
        songEditBtns = (
            <>
                <button className='portal-edit-btn' onClick={() => handleEditBtn(songId)}>Edit</button>
                {/* <SongDelete songId={songId} /> */}
            </>
        );
    }

    const playSongBtn = useCallback((song) => {
        dispatch(playSong(song));
    }, [dispatch]);

    return (
        <div className='song-portal-lrg'>
            <div>
                <div className='portal-song-details'>
                    <div>
                        <button className='primary-play-btn' onClick={() => playSongBtn(song)}>
                            <i className="fas fa-play"></i>
                        </button>
                        <div>
                            <h2 className='detail-title'>{song?.title}</h2>
                            <Link className='song-hero-link' to={{ pathname: `/artists/${song?.userId}` }}>
                                <h3 className='detail-artist'>{song?.Artist?.username}</h3>
                            </Link>
                        </div>
                    </div>
                    <div>
                        {songEditBtns}
                    </div>
                </div>
                <div className='song-img-lrg' style={{ backgroundImage: 'url(' + song?.imageUrl + ')' }}>
                </div>
            </div>
        </div>
    );
};



export default SongDetails;
