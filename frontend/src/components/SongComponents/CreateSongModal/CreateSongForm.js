import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import * as songActions from '../../../store/song';

import './CreateSongForm.css';

const CreateSongForm = ({ setShowModal }) => {
    const { albumId } = useParams();
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/defaultmusiccover.webp'); //default image
    const [audioUrl, setAudioUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imageText, setImageText] = useState('');
    const [audioText, setAudioText] = useState('');
    const [errors, setErrors] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [upload, setUpload] = useState(['Upload', 'Cancel']);

    const history = useHistory();
    const dispatch = useDispatch();

    const reset = () => {
        setTitle('');
        setImageUrl('');
        setAudioUrl('');
        setDescription('');
        setErrors([]);
        setImageText('');
        setAudioText('');
        setUpload(['Upload', 'Cancel']);
    };

    let songFormHeader;

    if (albumId) {
        songFormHeader = 'Upload To Album'
    } else {
        songFormHeader = 'Upload Your Song'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);
        setUpload(['Please', 'Wait']);
        setDisabled(true);

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
            setImageText(imgFile.name);
        }
    };

    const updateAudFile = (e) => {
        const audFile = e.target.files[0];
        if (audFile) {
            setAudioUrl(audFile);
            setAudioText(audFile.name);
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
        <>
            <h2 className='form-header'>{songFormHeader}</h2>
            <div className='create-song-form'>
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
                        <label htmlFor='imageUrl'>{imageText || 'Image'}</label>
                        <input type='file' className='file-upload' name='imageUrl' placeholder='Default Cover' onChange={e => updateImgFile(e)} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='audioUrl'>{audioText || 'Audio'}</label>
                        <input type='file' className='file-upload' name='audioUrl' onChange={e => updateAudFile(e)} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='description'>Description</label>
                        <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-btn-container'>
                        <button disabled={disabled}>{upload[0]}</button>
                        <button disabled={disabled} className='main-btn' onClick={(e) => handleCancelBtn(e)}>{upload[1]}</button>
                    </div>
                </form>
            </div>
        </>
    );
};



export default CreateSongForm;
