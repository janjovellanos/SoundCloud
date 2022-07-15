import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import * as songActions from '../../../store/song';

import './CreateSongForm.css';

const CreateSongForm = ({ setShowModal }) => {
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/defaultmusiccover.webp'); //default image
    const [audioUrl, setAudioUrl] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const reset = () => {
        setTitle('');
        setImageUrl('');
        setAudioUrl('');
        setDescription('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);

        await dispatch(songActions.createSong({
            title,
            imageUrl,
            audioUrl,
            description,
            albumId
        }))
            .then(() => {
                setShowModal(false);
                if (albumId) {
                    history.push(`/albums`) //hard fixed song upload on album
                    history.push(`/albums/${albumId}`)
                } else {
                    history.push(`/songs`);
                }
            })
            .catch(async (res) => {
                const data = await res.json();

                if (data && data.errors) {
                    setErrors(data.errors);
                }
            });
        reset();
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

        if (albumId) {
            history.push(`/albums/${albumId}`)
        } else {
            history.push('/songs');
        }
    }

    return (
        <div className='create-song-form'>
            <h2>Upload Your Song</h2>
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
                    <input type='file' name='imageUrl' placeholder='Default Cover' onChange={e => updateImgFile(e)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='audioUrl'>Song Url</label>
                    <input type='file' name='audioUrl' onChange={e => updateAudFile(e)} />
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



export default CreateSongForm;
