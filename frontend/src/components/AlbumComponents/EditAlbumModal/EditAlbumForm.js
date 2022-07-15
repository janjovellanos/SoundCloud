import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as albumActions from '../../../store/album';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';

import './EditAlbumForm.css';

const EditAlbumForm = ({ setShowModal }) => {
    const { albumId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const album = useSelector(state => state.albums[`${albumId}`]);
    const dispatch = useDispatch();
    const [title, setTitle] = useState(album.title);
    const [imageUrl, setImageUrl] = useState(album.imageUrl);
    const [description, setDescription] = useState(album.description);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

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
        }
    };

    const handleCancelBtn = (e) => {
        e.preventDefault();
        setShowModal(false);
        history.push(`/albums/${albumId}`);
    }

    return (
        <div className='create-song-form'>
            <h2>Edit Your Album</h2>
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
                    <input type='file' name='imageUrl' placeholder='Default Cover' onChange={(e) => updateImgFile(e)} />
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



export default EditAlbumForm;
