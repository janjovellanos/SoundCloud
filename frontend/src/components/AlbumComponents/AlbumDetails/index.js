import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';

import * as albumActions from "../../../store/album";
import * as songActions from '../../../store/song';
import { playSong } from "../../../store/player";
import CreateSongFormModal from '../../SongComponents/CreateSongModal';
import EditAlbumFormModal from '../EditAlbumModal';

import './AlbumDetails.css'

const AlbumDetails = () => {
    const { albumId } = useParams();
    const user = useSelector(state => (state.session.user));
    const album = useSelector(state => (state.albums[albumId]));
    const [imageUrl, setImageUrl] = useState('https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/defaultmusiccover.webp');

    const albumSongs = album?.Songs;
    let songCount = 0;

    const history = useHistory();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(albumActions.getAlbum(albumId))
    }, [dispatch, albumId]);

    useEffect(() => {
        if (album) {
            setImageUrl(album.imageUrl)
        }
    }, [album])

    const playSongBtn = useCallback((song) => {
        dispatch(playSong(song));
    }, [dispatch]);

    const handleAlbumDeleteBtn = (albumId) => {
        dispatch(albumActions.deleteOneAlbum(+albumId));
        history.push("/albums");
    };

    const handleSongDeleteBtn = async (songId) => {
        await dispatch(songActions.deleteOneSong(songId));
        history.push(`/albums`);
        history.push(`/albums/${albumId}`);
    };

    let albumEditBtns;

    if (album?.userId === user?.id) {
        albumEditBtns = (
            <>
                <div className='edit-btns'>
                    <EditAlbumFormModal />
                    <button className='album-action-btn' onClick={() => handleAlbumDeleteBtn(albumId)}>Delete <i className="fa-solid fa-trash-can"></i></button>
                    <div className='album-upload-song-btn'>
                        <CreateSongFormModal />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='album-details-container' style={{ backgroundImage: 'url(' + imageUrl + ')' }}>
                <div>
                    <div className='album-details'>
                        <div>
                            <div className='album-text-details'>
                                <h2 className='detail-title'>{album?.title}</h2>
                                <Link className='artist-link' to={{ pathname: `/artists/${album?.userId}` }}>
                                    <h3 className='detail-artist'>by {album?.Artist?.username}</h3>
                                </Link>
                            </div>
                        </div>
                        {albumEditBtns}
                    </div>
                </div>
            </div>
            <div className='album-songs-container'>
                <div>
                    {albumSongs?.map((song) =>
                    (
                        <li key={song.id} className='album-song-container'>
                            <div className='song-and-play'>
                                <Link className='album-song-title-link' to={{ pathname: `/songs/${song.id}` }}>
                                    <p>{++songCount}. {song.title}</p>
                                </Link>
                                <button className='album-play-btn list-style-album-play-btn' onClick={() => playSongBtn(song)}>
                                    <i className="fas fa-play"></i>
                                </button>
                            </div>
                            <button className='album-song-delete' onClick={() => handleSongDeleteBtn(song.id)}><i className="fa-solid fa-trash-can"></i></button>
                        </li>
                    )
                    )}
                </div>
            </div>
        </>
    );
};

export default AlbumDetails;
