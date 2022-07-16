import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

import * as songActions from '../../../store/song';

const EditSongForm = ({ setShowModal }) => {
    const { songId } = useParams();
    const song = useSelector(state => state.songs[`${songId}`]);
    const [title, setTitle] = useState(song.title);
    const [imageUrl, setImageUrl] = useState(song.imageUrl);
    const [audioUrl, setAudioUrl] = useState(song.audioUrl);
    const [description, setDescription] = useState(song.description);
    const [imageText, setImageText] = useState('');
    const [audioText, setAudioText] = useState('');
    const [errors, setErrors] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [upload, setUpload] = useState(['Save', 'Cancel']);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);
        setUpload(['Please', 'Wait']);
        setDisabled(true);

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
                if (data && data.errors) {
                    setErrors(data.errors);
                    setDisabled(false);
                    setUpload(['Save', 'Cancel']);
                }
            });

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
        history.push(`/songs/${songId}`);
    }

    return (
        <>
            <h2 className='form-header'>Edit Your Song</h2>
            <div className='create-song-form'>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {Object.values(errors).map((error, index) => (
                            <li className='error-li' key={index}>{error}</li>
                        ))}
                    </ul>
                    <div className='input-container'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='imageUrl'>{imageText || 'Image'}</label>
                        <input type='file' className='file-upload' name='imageUrl' placeholder={imageUrl} onChange={(e) => updateImgFile(e)} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='audioUrl'>{audioText || 'Audio'}</label>
                        <input type='file' className='file-upload' name='audioUrl' onChange={(e) => updateAudFile(e)} />
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



export default EditSongForm;
