import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

import * as songActions from '../../../store/song';

import './EditSongForm.css';

const EditSongForm = ({ setShowModal }) => {
    const { songId } = useParams();
    const song = useSelector(state => state.songs[`${songId}`]);
    const dispatch = useDispatch();
    const [title, setTitle] = useState(song.title);
    const [imageUrl, setImageUrl] = useState(song.imageUrl);
    const [audioUrl, setAudioUrl] = useState(song.audioUrl);
    const [description, setDescription] = useState(song.description);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        dispatch(songActions.editSong({
            title,
            imageUrl,
            audioUrl,
            description,
        }, songId))
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

    };

    const updateImgFile = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            setImageUrl(imgFile);
        }
    };

    const updateAudFile = (e) => {
        const audFile = e.target.files[0];
        if (audFile) {
            setAudioUrl(audFile);
        }
    };

    const handleCancelBtn = (e) => {
        e.preventDefault();
        setShowModal(false);
        history.push(`/songs/${songId}`);
    }

    return (
        <div className='create-song-form'>
            <h2>Edit Your Song</h2>
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
                    <input type='file' name='imageUrl' placeholder={imageUrl} onChange={(e) => updateImgFile(e)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='audioUrl'>Song Url</label>
                    <input type='file' name='audioUrl' onChange={(e) => updateAudFile(e)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='description'>Description</label>
                    <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='form-btn-container'>
                    <button>Save</button>
                    <button className='main-btn' onClick={(e) => handleCancelBtn(e)}>Cancel</button>
                </div>
            </form>
        </div>
    );
};



export default EditSongForm;
