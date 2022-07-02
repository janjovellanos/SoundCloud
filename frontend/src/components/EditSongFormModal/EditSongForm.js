import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as songActions from '../../store/song';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';

import './EditSongForm.css';

const EditSongForm = ({ setShowModal }) => {
    const { songId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const song = useSelector(state => state.songs[`${songId}`]);
    const dispatch = useDispatch();
    const [title, setTitle] = useState(song.title);
    const [imageUrl, setImageUrl] = useState(song.imageUrl);
    const [audioUrl, setAudioUrl] = useState(song.audioUrl);
    const [description, setDescription] = useState(song.description);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    // const reset = () => {
    //     setTitle('');
    //     setImageUrl('');
    //     setAudioUrl('');
    //     setDescription('');
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        dispatch(songActions.editSong({
            id: songId,
            title,
            imageUrl,
            audioUrl,
            description,
            userId
        }))
            .then(() => {
                setShowModal(false);
                history.push(`/songs/${songId}`);
            })
            .catch(async (res) => {
                const data = await res.json();
                console.log(data);
                if (data && data.errors) {
                    setErrors(data.errors);
                }
            });

        // reset();
    };

    const handleCancelBtn = (e) => {
        e.preventDefault();
        setShowModal(false);
        history.push(`/songs/${songId}`);
    }

    return (
        <div className='create-song-form'>
            <h2>Upload Your New Song Below.</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
                <div className='input-container'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='imageUrl'>Image Url</label>
                    <input type='text' name='imageUrl' value='Default Cover' onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='audioUrl'>Song Url</label>
                    <input type='text' name='audioUrl' value={audioUrl} onChange={(e) => setAudioUrl(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='description'>Description</label>
                    <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='form-btn-container'>
                    <button>Upload</button>
                    <button className='main-btn' onClick={(e) => handleCancelBtn(e)}>Cancel</button>
                </div>
            </form>
        </div>
    );
};



export default EditSongForm;
