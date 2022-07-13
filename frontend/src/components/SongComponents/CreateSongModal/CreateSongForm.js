import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as songActions from '../../../store/song';
import { useHistory, useParams } from 'react-router';

import './CreateSongForm.css';

const CreateSongForm = ({ setShowModal }) => {
    const sessionUser = useSelector(state => state.session.user);
    // const userId = sessionUser.id;
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/defaultmusiccover.webp'); //default image
    const [audioUrl, setAudioUrl] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const { albumId } = useParams();
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
                    <input type='text' name='imageUrl' placeholder='Default Cover' onChange={(e) => setImageUrl(e.target.value)} />
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



export default CreateSongForm;
