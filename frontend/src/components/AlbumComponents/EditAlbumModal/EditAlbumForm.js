import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

import * as albumActions from '../../../store/album';

import './EditAlbumForm.css';

const EditAlbumForm = ({ setShowModal }) => {
    const { albumId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const album = useSelector(state => state.albums[`${albumId}`]);
    const [title, setTitle] = useState(album.title);
    const [imageUrl, setImageUrl] = useState(album.imageUrl);
    const [description, setDescription] = useState(album.description);
    const [imageText, setImageText] = useState('');
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

        dispatch(albumActions.editAlbum({
            title,
            imageUrl,
            description,
        }, albumId))
            .then(() => {
                setShowModal(false);
                history.push(`/albums/${albumId}`);
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
        console.log(imgFile)
        if (imgFile) {
            setImageUrl(imgFile);
            setImageText(imgFile.name);
        }
    };

    const handleCancelBtn = (e) => {
        e.preventDefault();
        setShowModal(false);
        history.push(`/albums/${albumId}`);
    }

    return (
        <>
            <h2 className='form-header'>Edit Your Album</h2>
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
                        <input type='file' className='file-upload' name='imageUrl' placeholder='Default Cover' onChange={(e) => updateImgFile(e)} />
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



export default EditAlbumForm;
