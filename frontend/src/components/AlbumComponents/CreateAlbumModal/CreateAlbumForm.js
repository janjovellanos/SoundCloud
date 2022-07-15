import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import * as albumActions from '../../../store/album';

import './CreateAlbumForm.css';

const CreateAlbumForm = ({ setShowModal }) => {
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/defaultmusiccover.webp'); //default image
    const [description, setDescription] = useState('');
    const [imageText, setImageText] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();

    const reset = () => {
        setTitle('');
        setImageUrl('');
        setDescription('');
        setImageText('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);


        dispatch(albumActions.createAlbum({
            userId,
            title,
            imageUrl,
            description
        }))
            .then(() => {
                setShowModal(false);
                history.push(`/albums`);
                reset();
            })
            .catch(async (res) => {
                const data = await res.json();

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
        history.push('/albums');
    }

    return (
        <>
            <h2 className='form-header'>Create An Album</h2>
            <div className='create-album-form'>
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
                        <button>Create</button>
                        <button className='main-btn' onClick={(e) => handleCancelBtn(e)}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};



export default CreateAlbumForm;
